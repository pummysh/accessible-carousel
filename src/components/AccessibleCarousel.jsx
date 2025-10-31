import React, { useRef, useState, useEffect } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function AccessibleCarousel({ slides = [] }) {
  const sliderRef = useRef(null);
  const [current, setCurrent] = useState(0);
  const [announce, setAnnounce] = useState('');
  const total = slides.length;

  const settings = {
    dots: false,
    arrows: false,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    afterChange: (index) => {
      setCurrent(index);
      const title = slides[index]?.title || `Slide ${index + 1}`;
      setAnnounce(`Slide ${index + 1} of ${total}: ${title}`);
    },
  };

  useEffect(() => {
    if (slides.length) {
      const t = slides[0].title || 'Slide 1';
      setAnnounce(`Slide 1 of ${total}: ${t}`);
    }
  }, [total, slides]);

  function onKeyDown(e) {
    const key = e.key;
    if (key === 'ArrowRight') { e.preventDefault(); goNext(); }
    else if (key === 'ArrowLeft') { e.preventDefault(); goPrev(); }
    else if (key === 'Home') { e.preventDefault(); goTo(0); }
    else if (key === 'End') { e.preventDefault(); goTo(total - 1); }
  }

  function goNext(){ sliderRef.current?.slickNext(); }
  function goPrev(){ sliderRef.current?.slickPrev(); }
  function goTo(idx){ sliderRef.current?.slickGoTo(idx); }

  return (
    <section
      role="region"
      aria-roledescription="carousel"
      aria-label="Featured content"
      onKeyDown={onKeyDown}
      tabIndex={-1}
      style={{
        maxWidth: "700px",
        margin: "40px auto",
        padding: "20px",
        borderRadius: "12px",
        background: "#fff",
        boxShadow: "0 0 10px rgba(0,0,0,0.1)",
        overflow: "hidden"
      }}
    >
      {/* Screen Reader Live Region */}
      <div aria-live="polite" aria-atomic="true" className="sr-only" id="carousel-live">
        {announce}
      </div>

      {/* Carousel Controls + Slider */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "12px",
          width: "100%",
        }}
      >
        <button
          onClick={goPrev}
          aria-label="Previous slide"
          disabled={current === 0}
          style={{
            flexShrink: 0,
            padding: "8px 12px",
            borderRadius: "6px",
            background: current === 0 ? "#ddd" : "#007bff",
            color: "#fff",
            border: "none",
            cursor: current === 0 ? "not-allowed" : "pointer",
          }}
        >
          ← Prev
        </button>

        <div style={{ flex: 1, overflow: "hidden" }}>
          <Slider ref={sliderRef} {...settings}>
            {slides.map((s, i) => {
              const isActive = i === current;
              return (
                <div key={i} style={{ outline: "none" }}>
                  <div
                    id={`slide-${i + 1}`}
                    role="group"
                    aria-roledescription="slide"
                    aria-label={`Slide ${i + 1} of ${total}`}
                    aria-hidden={!isActive}
                    tabIndex={isActive ? 0 : -1}
                    style={{
                      padding: "20px",
                      minHeight: "200px",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      background: "#f7f7f7",
                      borderRadius: "8px",
                      textAlign: "center",
                    }}
                  >
                    <h2 style={{ margin: 0 }}>{s.title}</h2>
                    <p style={{ marginTop: 8 }}>{s.description}</p>
                    <div style={{ marginTop: 8 }}>
                      <a href="#" onClick={(e) => e.preventDefault()}>
                        Learn more
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>

        <button
          onClick={goNext}
          aria-label="Next slide"
          disabled={current === total - 1}
          style={{
            flexShrink: 0,
            padding: "8px 12px",
            borderRadius: "6px",
            background: current === total - 1 ? "#ddd" : "#007bff",
            color: "#fff",
            border: "none",
            cursor: current === total - 1 ? "not-allowed" : "pointer",
          }}
        >
          Next →
        </button>
      </div>

      {/* Slide Indicators */}
      <div style={{ marginTop: 16, textAlign: "center" }}>
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            aria-pressed={i === current}
            style={{
              marginRight: 6,
              width: 28,
              height: 28,
              borderRadius: "50%",
              border: "none",
              background: i === current ? "#007bff" : "#ccc",
              cursor: "pointer",
            }}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </section>
  );
}
