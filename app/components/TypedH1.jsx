"use client";

import { useEffect, useRef } from "react";
import Typed from "typed.js";

export default function TypedH1({ text = "amk.codes" }) {
  const el = useRef(null);
  const typedRef = useRef(null);
  const deleteTimerRef = useRef(null);
  const typeTimerRef = useRef(null);

  function destroyTyped() {
    typedRef.current?.destroy();
    typedRef.current = null;
  }

  function createTyped() {
    if (!el.current) return;

    destroyTyped();

    typedRef.current = new Typed(el.current, {
      strings: [text],
      typeSpeed: 70,
      showCursor: true,
      cursorChar: "|",
      loop: false,
    });
  }

  useEffect(() => {
    if (!el.current) return;

    createTyped();

    return () => {
      if (deleteTimerRef.current) {
        clearInterval(deleteTimerRef.current);
        deleteTimerRef.current = null;
      }
      if (typeTimerRef.current) {
        clearInterval(typeTimerRef.current);
        typeTimerRef.current = null;
      }
      destroyTyped();
    };
  }, [text]);

  function startDeletingOnHover() {
    if (!el.current) return;

    typedRef.current?.stop();

    if (typeTimerRef.current) {
      clearInterval(typeTimerRef.current);
      typeTimerRef.current = null;
    }

    if (deleteTimerRef.current) {
      clearInterval(deleteTimerRef.current);
      deleteTimerRef.current = null;
    }

    deleteTimerRef.current = setInterval(() => {
      if (!el.current) return;

      const current = el.current.textContent ?? "";
      if (current.length === 0) {
        clearInterval(deleteTimerRef.current);
        deleteTimerRef.current = null;
        return;
      }

      el.current.textContent = current.slice(0, -1);
    }, 70);
  }

  function stopDeleting() {
    if (deleteTimerRef.current) {
      clearInterval(deleteTimerRef.current);
      deleteTimerRef.current = null;
    }
  }

  function stopTypingTimer() {
    if (typeTimerRef.current) {
      clearInterval(typeTimerRef.current);
      typeTimerRef.current = null;
    }
  }

  function resumeTypingFromCurrentText() {
    if (!el.current) return;

    const current = el.current.textContent ?? "";

    stopTypingTimer();

    let cursor = current.length;
    if (cursor >= text.length) {
      return;
    }

    typeTimerRef.current = setInterval(() => {
      if (!el.current) return;

      cursor += 1;
      el.current.textContent = text.slice(0, cursor);

      if (cursor >= text.length) {
        clearInterval(typeTimerRef.current);
        typeTimerRef.current = null;
      }
    }, 70);
  }

  function handleMouseEnter() {
    startDeletingOnHover();
  }

  function handleMouseLeave() {
    stopDeleting();
    resumeTypingFromCurrentText();
  }

  return (
    <h1 className="center heroTitle" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <span ref={el} />
    </h1>
  );
}
