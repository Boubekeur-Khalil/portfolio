// src/App.tsx
import React from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import "/public/assets/css/particles.css"; 

const App: React.FC = () => {
  return (
    <>
      <Nav />
      <main id="home" className="w-full">
       {/* Floating light elements contained within the hero section */} 

        <div className="light x1"></div>
        <div className="light x2"></div>
        <div className="light x3"></div>
        <div className="light x4"></div>
        <div className="light x5"></div>
        <div className="light x6"></div>
        <div className="light x7"></div>
        <div className="light x8"></div>
        <div className="light x9"></div>
      
      {/* #### HERO SECTION #### */}
      
      <section className="pt-20 md:pt-0 bg-white dark:bg-black">

      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-32 lg:grid-cols-12 relative z-10">
        <div className="mr-auto place-self-center lg:col-span-7">
        <h1
            id="dynamicHeadline"
            className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white"
          >
            Chaining Bugs into{" "}
            <span id="dynamicWords" className="text-green-500 font-bold">
              Critical Exploit Paths
            </span>
          </h1>

          <p className="max-w-2xl mb-6 font-bold text-gray-500 lg:mb-8 text-3xl dark:text-gray-400">
          Security researcher specializing in SSO misconfigurations, API authorization gaps, and server-side file handling flaws. I find the bugs that scanners miss.

          </p>
          <a
            href="#about"
            className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text:3xl text-center text-white  bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
          >
            More About Me
            <svg
              className="w-5 h-5 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-5 py-4 text-base font-medium text:3xl text-center text-gray-900 border-4 border-green-300  hover:bg-green-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-green-700 dark:hover:bg-green-700 dark:focus:ring-gray-800"
          >
            Contact Me!
          </a>
        </div>
        <div 
          id="hacker-logo" 
          className="lg:mt-0 lg:col-span-5 lg:flex relative z-10"
          style={{ opacity: 0 }}  // This ensures it's initially invisible but still rendered
        >
          <img
            src="./assets/images/hacker.png"
            alt="hacker"
          />
        </div>
      </div>
    </section>

    {/* #### ACCOLADES SECTION #### */}
        <section className="bg-white dark:bg-black ">
          <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-28 lg:px-6 border-4 border-solid border-green-700 bg-white dark:bg-black relative z-20">
          <dl className="grid max-w-screen-md gap-8 mx-auto text-gray-900 sm:grid-cols-3 dark:text-white">
              <div className="flex flex-col items-center justify-center">
                  <dt className="mb-2 text-5xl md:text-7xl font-extrabold">
                      <span data-counter-target="9">0</span>
                  </dt>
                  <dd className="font-light text-2xl text-gray-500 dark:text-gray-400">Accepted Reports</dd>
              </div>
              <div className="flex flex-col items-center justify-center">
                  <dt className="mb-2 text-5xl md:text-7xl font-extrabold">
                      <span data-counter-target="3">0</span>
                  </dt>
                  <dd className="font-light text-2xl text-gray-500 dark:text-gray-400">Critical Findings</dd>
              </div>
              <div className="flex flex-col items-center justify-center">
                  <dt className="mb-2 text-5xl md:text-7xl font-extrabold">
                      <span data-counter-target="6">0</span>
                  </dt>
                  <dd className="font-light text-2xl text-gray-500 dark:text-gray-400">Steps in Longest Chain</dd>
              </div>
          </dl>
                    </div>
                    
        </section>

        {/* #### SERVICES SECTION #### */}
          <section id="services" className="pt-8 pb-12 bg-white dark:bg-black flex justify-center items-center">
          <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6 text-center">

              <div className="max-w-screen-md mb-8 lg:mb-12 mx-auto">
                <h2 className="mb-4 text-4xl md:text-5xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                Vulnerability Classes I Hunt
                </h2>
                <p className="text-gray-500 text-2xl dark:text-gray-400">
                From SSO misconfigurations to unrestricted file uploads, I chain low-severity findings into critical exploit paths that demonstrate real-world impact.
                </p>
              </div>

              <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
              <div className="transform transition-all duration-300 hover:scale-105 group">
                  <div className="flex justify-center mx-auto items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                    <svg 
                      className="w-[48px] h-[48px] text-gray-800 dark:text-white transition-colors duration-300 group-hover:text-green-500 group-hover:scale-125"
                      aria-hidden="true" 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="24" 
                      height="24" 
                      fill="none" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        stroke="currentColor" 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth="1" 
                        d="M9.5 11.5 11 13l4-3.5M12 20a16.405 16.405 0 0 1-5.092-5.804A16.694 16.694 0 0 1 5 6.666L12 4l7 2.667a16.695 16.695 0 0 1-1.908 7.529A16.406 16.406 0 0 1 12 20Z"
                      />
                    </svg>
                  </div>
                  <h3 className="mb-2 text-3xl font-bold dark:text-white">SSO / OAuth ATO</h3>
                  <p className="text-gray-500 text-xl dark:text-gray-400">
                    nOAuth exploitation via multi-tenant MSAL misconfiguration and mutable Microsoft Graph mail attributes. SAML assertion manipulation and SSO identity collision attacks.
                  </p>
                </div>

                <div className="transform transition-all duration-300 hover:scale-105 group">
                  <div className="flex justify-center mx-auto items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                  <svg className="w-[48px] h-[48px] text-gray-800 dark:text-white transition-colors duration-300 group-hover:text-green-500 group-hover:scale-125 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M3 15v3c0 .5523.44772 1 1 1h8v-8m-9 4v-4m0 4h9m-9-4V6c0-.55228.44772-1 1-1h16c.5523 0 1 .44772 1 1v4M3 11h11m6.25 5c0 1.2426-1.0073 2.25-2.25 2.25M20.25 16c0-1.2426-1.0073-2.25-2.25-2.25M20.25 16H21m-3 2.25c-1.2426 0-2.25-1.0074-2.25-2.25M18 18.25V19m-2.25-3c0-1.2426 1.0074-2.25 2.25-2.25M15.75 16H15m3-2.25V13m-1.591 1.409-.5303-.5303m4.2426 4.2426-.5303-.5303m-3.182 0-.5303.5303m4.2426-4.2426-.5303.5303"/>
                </svg>

                  </div>
                  <h3 className="mb-2 text-3xl font-bold dark:text-white">API Authorization</h3>
                  <p className="text-gray-500 text-xl dark:text-gray-400">
                  Systemic write ACL bypass discovery where POST is blocked but PUT/PATCH/DELETE remain open. BOLA/IDOR on collection endpoints and hidden API surface mapping.
                  </p>
                </div>
                <div className="transform transition-all duration-300 hover:scale-105 group">
                  <div className="flex justify-center mx-auto items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                  <svg className="w-[48px] h-[48px] text-gray-800 dark:text-white transition-colors duration-300 group-hover:text-green-500 group-hover:scale-125" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M6 4h12M6 4v16M6 4H5m13 0v16m0-16h1m-1 16H6m12 0h1M6 20H5M9 7h1v1H9V7Zm5 0h1v1h-1V7Zm-5 4h1v1H9v-1Zm5 0h1v1h-1v-1Zm-3 4h2a1 1 0 0 1 1 1v4h-4v-4a1 1 0 0 1 1-1Z"/>
                  </svg>

                  </div>
                  <h3 className="mb-2 text-3xl font-bold dark:text-white">Path Traversal & LFI</h3>
                  <p className="text-gray-500 text-xl dark:text-gray-400">
                  Writable metadata fields exploited for directory traversal to read arbitrary files. Chaining .env.local secrets and private keys to escalate from file read to full compromise.
                  </p>
                </div>
                <div className="transform transition-all duration-300 hover:scale-105 group">
                  <div className="flex justify-center mx-auto items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                  <svg className="w-[48px] h-[48px] text-gray-800 dark:text-white transition-colors duration-300 group-hover:text-green-500 group-hover:scale-125" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M14.7141 15h4.268c.4043 0 .732-.3838.732-.8571V3.85714c0-.47338-.3277-.85714-.732-.85714H6.71411c-.55228 0-1 .44772-1 1v4m10.99999 7v-3h3v3h-3Zm-3 6H6.71411c-.55228 0-1-.4477-1-1 0-1.6569 1.34315-3 3-3h2.99999c1.6569 0 3 1.3431 3 3 0 .5523-.4477 1-1 1Zm-1-9.5c0 1.3807-1.1193 2.5-2.5 2.5s-2.49999-1.1193-2.49999-2.5S8.8334 9 10.2141 9s2.5 1.1193 2.5 2.5Z"/>
                  </svg>

                  </div>
                  <h3 className="mb-2 text-3xl font-bold dark:text-white">Authentication Bypass</h3>
                  <p className="text-gray-500 text-xl dark:text-gray-400">
                  Password reset token leakage via user enumeration endpoints. Unauthenticated reset flows, JWT key theft from LFI, and token forgery for privilege escalation.
                  </p>
                </div>
                <div className="transform transition-all duration-300 hover:scale-105 group">
                  <div className="flex justify-center mx-auto items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                  <svg className="w-[48px] h-[48px] text-gray-800 dark:text-white transition-colors duration-300 group-hover:text-green-500 group-hover:scale-125" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M10 5 9 4V3m5 2 1-1V3m-3 6v11m0-11a5 5 0 0 1 5 5m-5-5a5 5 0 0 0-5 5m5-5a4.959 4.959 0 0 1 2.973 1H15V8a3 3 0 0 0-6 0v2h.027A4.959 4.959 0 0 1 12 9Zm-5 5H5m2 0v2a5 5 0 0 0 10 0v-2m2.025 0H17m-9.975 4H6a1 1 0 0 0-1 1v2m12-3h1.025a1 1 0 0 1 1 1v2M16 11h1a1 1 0 0 0 1-1V8m-9.975 3H7a1 1 0 0 1-1-1V8"/>
                </svg>
                  </div>
                  <h3 className="mb-2 text-3xl font-bold dark:text-white">RCE via File Upload</h3>
                  <p className="text-gray-500 text-xl dark:text-gray-400">
                  Unrestricted file upload to web-accessible directories where Apache executes uploaded PHP. Combining forged JWT tokens with webroot write access for remote code execution.
                  </p>
                </div>
                <div className="transform transition-all duration-300 hover:scale-105 group">
                  <div className="flex justify-center mx-auto items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                  <svg className="w-[48px] h-[48px] text-gray-800 dark:text-white transition-colors duration-300 group-hover:text-green-500 group-hover:scale-125" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M14.6144 7.19994c.3479.48981.5999 1.15357.5999 1.80006 0 1.6569-1.3432 3-3 3-1.6569 0-3.00004-1.3431-3.00004-3 0-.67539.22319-1.29865.59983-1.80006M6.21426 6v4m0-4 6.00004-3 6 3-6 2-2.40021-.80006M6.21426 6l3.59983 1.19994M6.21426 19.8013v-2.1525c0-1.6825 1.27251-3.3075 2.95093-3.6488l3.04911 2.9345 3-2.9441c1.7026.3193 3 1.9596 3 3.6584v2.1525c0 .6312-.5373 1.1429-1.2 1.1429H7.41426c-.66274 0-1.2-.5117-1.2-1.1429Z"/>
                </svg>

                  </div>
                  <h3 className="mb-2 text-3xl font-bold dark:text-white">Recon & Surface Mapping</h3>
                  <p className="text-gray-500 text-xl dark:text-gray-400">
                  JS bundle mining for hidden API endpoints, OpenAPI spec analysis, CT log subdomain expansion, and favicon hash pivoting to map the full attack surface before testing.
                  </p>
                </div>
              </div>
            </div>
          </section>
          
          {/* #### LOGOS SECTION #### */}

          <section className="bg-gray-100 dark:bg-black lg:py-18 lg:px-6 border-t-4 border-b-4 border-solid border-green-700 bg-white dark:bg-black relative z-20">
            <div className="py-8 lg:py-16 mx-auto max-w-screen-xl px-4 ">
                <h2 className="mb-8 lg:mb-16 text-3xl font-extrabold tracking-tight leading-tight text-center text-gray-900 dark:text-white md:text-4xl">Platforms & Tools</h2>
                <div className="grid grid-cols-2 gap-8 text-gray-500 sm:gap-12 md:grid-cols-3 lg:grid-cols-6 dark:text-gray-400">
                    <a href="#" className="flex justify-center items-center">
                        <span className="text-xl font-bold hover:text-gray-900 dark:hover:text-white transition-colors">Burp Suite</span>
                    </a>
                    <a href="#" className="flex justify-center items-center">
                        <span className="text-xl font-bold hover:text-gray-900 dark:hover:text-white transition-colors">Caido</span>
                    </a>
                    <a href="#" className="flex justify-center items-center">
                        <span className="text-xl font-bold hover:text-gray-900 dark:hover:text-white transition-colors">Nuclei</span>
                    </a>
                    <a href="#" className="flex justify-center items-center">
                        <span className="text-xl font-bold hover:text-gray-900 dark:hover:text-white transition-colors">Docker</span>
                    </a>
                    <a href="#" className="flex justify-center items-center">
                        <span className="text-xl font-bold hover:text-gray-900 dark:hover:text-white transition-colors">YesWeHack</span>
                    </a>
                    <a href="#" className="flex justify-center items-center">
                        <span className="text-xl font-bold hover:text-gray-900 dark:hover:text-white transition-colors">HackerOne</span>
                    </a>
                </div>
            </div>
        </section>

          {/* #### ABOUT SECTION #### */}
          <section id="about" className="bg-white dark:bg-black pt-8">
          <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-8 lg:px-6">
            <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
              <h2 className="mb-4 text-5xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                About Me
              </h2>
              <p className="mb-4 text-3xl">
              Security researcher from Algeria. I specialize in chaining low-severity findings into critical exploit paths â€” turning informational disclosures into full RCE through methodical escalation.
              </p>
              <p className="text-xl">
             On my first private engagement, I produced 9 accepted reports (3 Critical, 2 High, 4 Medium) including a CVSS 10.0 path traversal and a 6-step chain from outsider to Remote Code Execution. I also build things â€” Android apps, web platforms, and the security tools I wish existed.
              </p>
              <a href="https://github.com/Boubekeur-Khalil" target="_blank" rel="noopener noreferrer" className="inline-flex mt-8 items-center justify-center px-5 py-4 text-base font-medium text:3xl text-center text-gray-900 border-4 border-green-300  hover:bg-green-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-green-700 dark:hover:bg-green-700 dark:focus:ring-gray-800"
          >
            View GitHub Profile
          </a>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-8">
            <img
              className="w-full transition-all duration-300 hover:saturate-150 hover:brightness-75 hover:hue-rotate-15"
              src="./assets/images/office-long-2.png"
              alt="office content 1"
            />
            <img
              className="mt-4 w-full lg:mt-10 transition-all duration-300 hover:saturate-150 hover:brightness-75 hover:hue-rotate-15"
              src="./assets/images/office-long-1.png"
              alt="office content 2"
            />
          </div>
          </div>
          <div className="max-w-screen-xl px-4 pb-8 mx-auto text-center lg:pb-16 lg:px-6">
            <figure className="max-w-screen-md mx-auto">
              <svg
                className="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600"
                viewBox="0 0 24 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                  fill="currentColor"
                />
              </svg>
              <blockquote className="transform transition-all duration-300 hover:scale-125">
              <p className="text-2xl font-medium py-8 text-gray-900 dark:text-white">
                "I don't look for single bugs â€” I look for the path that connects them. A misconfigured SSO becomes account takeover. A metadata field becomes file read. A file read becomes code execution. The chain is the finding."
              </p>
            </blockquote>
              <figcaption className="flex items-center justify-center mt-6 space-x-3">
                <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                  <div className="pr-3 font-medium text-gray-900 dark:text-white">
                    Khalil Boubekeur
                  </div>
                  <div className="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">
                    Security Researcher
                  </div>
                </div>
              </figcaption>
            </figure>
          </div>
        </section>
        <section id="contact" className="bg-white dark:bg-black">
          <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
            <img
              className="w-full transition-opacity duration-300 hover:opacity-70"
              src="./assets/images/data.png"
              alt="dashboard image"
            />
            <div className="mt-4 md:mt-0">
              <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Run a Private Program? Let's Talk.
              </h2>
              <p className="mb-6 font-light text-gray-500 text-xl lg:text-2xl dark:text-gray-400">
              I specialize in finding what automated scanners miss â€” logic flaws, authorization gaps, and multi-step exploit chains that require manual analysis.
              </p>
              <p className="mb-6 font-light text-gray-500 text-xl lg:text-2xl dark:text-gray-400">If your platform handles SSO, file management, or role-based access, I can help identify the paths an attacker would take before they do.
              </p>
            </div>
          </div>
        </section>
        {/* #### CONTACT SECTION #### */}
        <section className="bg-white dark:bg-black transition-all duration-300 hover:scale-105">
          <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
            Get in Touch
            </h2>
            <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 text-xl lg:text-2xl">
            Interested in collaboration or want to invite me to your private program? Drop me a message.
            </p>
            <form action="#" className="space-y-8">
            <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Your name
                </label>
                <input
                  type="text"
                  id="name"
                  className="shadow-sm bg-gray-50 border-4 border-green-300 text-gray-900 text-sm  focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-black dark:border-green-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="John Doe"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Your email
                </label>
                <input
                  type="email"
                  id="email"
                  className="shadow-sm bg-gray-50 border-4 border-green-300 text-gray-900 text-sm  focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-black dark:border-green-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="name@company.com"
                  required
                />
              </div>
              <div>
                <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="block p-3 w-full text-sm text-gray-900 bg-gray-50  border-4 border-green-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-black dark:border-green-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="Let us know how we can help you"
                  required
                />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
                  Your message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50  shadow-sm border-4 border-green-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-black dark:border-green-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Leave a comment..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="py-3 px-5 text-lx font-medium text-center text-white bg-green-600 hover:bg-green-700 border-2 border-green-600 rounded-none sm:w-fit focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:border-green-600 dark:focus:ring-green-800"
              >
                Send message
              </button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default App;
