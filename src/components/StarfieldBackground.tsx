"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

// Fundo 3D: campo de estrelas que ganha "warp" conforme o scroll + leve
// parallax do mouse. Fica atrás de todo o conteúdo. Pausa quando a aba
// está oculta e respeita prefers-reduced-motion.
export function StarfieldBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isMobile = Math.min(window.innerWidth, window.innerHeight) < 680;

    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x04060d, 0.0009);
    const camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 1, 3000);
    camera.position.set(0, 0, 1);

    // textura redonda e suave pras estrelas
    const disc = (() => {
      const c = document.createElement("canvas");
      c.width = c.height = 64;
      const g = c.getContext("2d")!;
      const grd = g.createRadialGradient(32, 32, 0, 32, 32, 32);
      grd.addColorStop(0, "rgba(255,255,255,1)");
      grd.addColorStop(0.25, "rgba(220,235,255,.9)");
      grd.addColorStop(1, "rgba(255,255,255,0)");
      g.fillStyle = grd;
      g.beginPath();
      g.arc(32, 32, 32, 0, Math.PI * 2);
      g.fill();
      const t = new THREE.Texture(c);
      t.needsUpdate = true;
      return t;
    })();

    const palette = [
      [1, 1, 1],
      [0.72, 0.82, 1],
      [0.88, 0.93, 1],
      [0.62, 0.76, 1],
      [1, 0.9, 0.82],
    ];

    type Field = { points: THREE.Points; count: number; spreadZ: number };
    const fields: Field[] = [];
    const makeField = (count: number, size: number, spreadZ: number): Field => {
      const geo = new THREE.BufferGeometry();
      const pos = new Float32Array(count * 3);
      const col = new Float32Array(count * 3);
      for (let i = 0; i < count; i++) {
        pos[i * 3] = (Math.random() - 0.5) * 1800;
        pos[i * 3 + 1] = (Math.random() - 0.5) * 1800;
        pos[i * 3 + 2] = -Math.random() * spreadZ;
        const c = palette[(Math.random() * palette.length) | 0];
        col[i * 3] = c[0];
        col[i * 3 + 1] = c[1];
        col[i * 3 + 2] = c[2];
      }
      geo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
      geo.setAttribute("color", new THREE.BufferAttribute(col, 3));
      const mat = new THREE.PointsMaterial({
        size,
        map: disc,
        vertexColors: true,
        transparent: true,
        opacity: 0.9,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
        sizeAttenuation: true,
      });
      const points = new THREE.Points(geo, mat);
      scene.add(points);
      const f = { points, count, spreadZ };
      fields.push(f);
      return f;
    };

    const DEPTH = 1600;
    const near = makeField(isMobile ? 800 : 1500, 6, DEPTH);
    const far = makeField(isMobile ? 600 : 1200, 3.5, DEPTH * 1.8);

    // nebulosa sutil (planos aditivos)
    const nebulaTexture = (inner: string) => {
      const c = document.createElement("canvas");
      c.width = c.height = 256;
      const g = c.getContext("2d")!;
      const grd = g.createRadialGradient(128, 128, 0, 128, 128, 128);
      grd.addColorStop(0, inner);
      grd.addColorStop(1, "rgba(0,0,0,0)");
      g.fillStyle = grd;
      g.fillRect(0, 0, 256, 256);
      const t = new THREE.Texture(c);
      t.needsUpdate = true;
      return t;
    };
    const makeNebula = (color: string, x: number, y: number, z: number, s: number) => {
      const m = new THREE.MeshBasicMaterial({
        map: nebulaTexture(color),
        transparent: true,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      });
      const p = new THREE.Mesh(new THREE.PlaneGeometry(s, s), m);
      p.position.set(x, y, z);
      scene.add(p);
      return p;
    };
    const neb1 = makeNebula("rgba(90,120,255,.35)", -500, 200, -1200, 1700);
    const neb2 = makeNebula("rgba(140,90,255,.28)", 600, -250, -1500, 2000);

    // scroll + mouse (com damping)
    let scrollT = 0;
    let scrollTarget = 0;
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      scrollTarget = max > 0 ? window.scrollY / max : 0;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    let mx = 0,
      my = 0,
      tmx = 0,
      tmy = 0;
    const onMouse = (e: MouseEvent) => {
      tmx = e.clientX / window.innerWidth - 0.5;
      tmy = e.clientY / window.innerHeight - 0.5;
    };
    if (!isMobile) window.addEventListener("mousemove", onMouse);

    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", onResize);

    const stream = (f: Field, speed: number) => {
      const arr = f.points.geometry.attributes.position.array as Float32Array;
      for (let i = 0; i < f.count; i++) {
        arr[i * 3 + 2] += speed;
        if (arr[i * 3 + 2] > 60) {
          arr[i * 3] = (Math.random() - 0.5) * 1800;
          arr[i * 3 + 1] = (Math.random() - 0.5) * 1800;
          arr[i * 3 + 2] = -f.spreadZ;
        }
      }
      f.points.geometry.attributes.position.needsUpdate = true;
    };

    const clock = new THREE.Clock();
    let raf = 0;
    let running = true;

    const tick = () => {
      const dt = Math.min(clock.getDelta(), 0.05);
      const t = clock.elapsedTime;

      scrollT += (scrollTarget - scrollT) * Math.min(dt * 3.5, 1);
      mx += (tmx - mx) * Math.min(dt * 2.5, 1);
      my += (tmy - my) * Math.min(dt * 2.5, 1);

      const base = reduce ? 0 : 10;
      const boost = reduce ? 0 : 150 * scrollT;
      stream(near, (base + boost) * dt * 3);
      stream(far, (base * 0.5 + boost * 0.45) * dt * 3);

      camera.position.x += (mx * 50 - camera.position.x) * 0.05;
      camera.position.y += (-my * 32 - camera.position.y) * 0.05;
      camera.rotation.z = mx * 0.03 + scrollT * 0.04;

      near.points.rotation.z = t * 0.004;
      far.points.rotation.z = -t * 0.003;

      neb1.material.opacity = 0.3 + Math.sin(t * 0.3) * 0.1;
      neb2.material.opacity = 0.26 + Math.cos(t * 0.25) * 0.08;

      renderer.render(scene, camera);
      raf = requestAnimationFrame(tick);
    };
    tick();

    // pausa quando a aba fica oculta
    const onVisibility = () => {
      if (document.hidden && running) {
        running = false;
        cancelAnimationFrame(raf);
      } else if (!document.hidden && !running) {
        running = true;
        clock.getDelta();
        tick();
      }
    };
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("mousemove", onMouse);
      window.removeEventListener("resize", onResize);
      document.removeEventListener("visibilitychange", onVisibility);
      fields.forEach((f) => {
        f.points.geometry.dispose();
        (f.points.material as THREE.Material).dispose();
      });
      [neb1, neb2].forEach((n) => {
        n.geometry.dispose();
        (n.material as THREE.Material).dispose();
      });
      disc.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0"
      style={{ width: "100%", height: "100%" }}
    />
  );
}
