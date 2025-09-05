import React, { useState } from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";

function About() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h2 className="text-3xl font-bold text-gray-900">About PRIME</h2>
      <p className="mt-4 text-gray-700">
        PRIME is a research platform for youth mental health and climate resilience.
      </p>
    </section>
  );
}

function StudyDesign() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h2 className="text-3xl font-bold text-gray-900">Study Design</h2>
      <p className="mt-4 text-gray-700">Overview of methods, measures, and analytic plans.</p>
    </section>
  );
}

function Team() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h2 className="text-3xl font-bold text-gray-900">Team</h2>
      <p className="mt-4 text-gray-700">Researchers, collaborators, and advisors.</p>
    </section>
  );
}

function Blog() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h2 className="text-3xl font-bold text-gray-900">Blog & Updates</h2>
      <p className="mt-4 text-gray-700">Latest news and project updates.</p>
    </section>
  );
}

function Resources() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h2 className="text-3xl font-bold text-gray-900">Resources</h2>
      <p className="mt-4 text-gray-700">Tools, datasets, and links.</p>
    </section>
  );
}

function Contact() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h2 className="text-3xl font-bold text-gray-900">Contact</h2>
      <p className="mt-4 text-gray-700">Get in touch with the PRIME team.</p>
    </section>
  );
}

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />

      {currentPage === "home" && (
        <HeroSection
          onExplore={() => setCurrentPage("about")}
          onGetInvolved={() => setCurrentPage("contact")}
        />
      )}
      {currentPage === "about" && <About />}
      {currentPage === "study-design" && <StudyDesign />}
      {currentPage === "team" && <Team />}
      {currentPage === "blog" && <Blog />}
      {currentPage === "resources" && <Resources />}
      {currentPage === "contact" && <Contact />}

      <footer className="mt-auto border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-sm text-gray-500">
          © {new Date().getFullYear()} PRIME — Youth Mental Health & Climate Resilience
        </div>
      </footer>
    </div>
  );
}
