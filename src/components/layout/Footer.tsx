import { Link } from "gatsby";
import * as React from "react";
import logo from "../../images/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <>
      <footer className="footer has-background-white">
        <div className="content has-text-left">
          <div className="container mb-6">
            {/* <div className="links">
              <div className="columns">
                <div className="column">
                  <div className="item has-text-weight-bold">
                    <Link to="/why-spring">Why Spring</Link>
                  </div>
                  <div className="item">
                    <Link to="/microservices">Microservices</Link>
                  </div>
                  <div className="item">
                    <Link to="/reactive">Reactive</Link>
                  </div>
                  <div className="item">
                    <Link to="/event-driven">Event Driven</Link>
                  </div>
                  <div className="item">
                    <Link to="/cloud">Cloud</Link>
                  </div>
                  <div className="item">
                    <Link to="/web-applications">Web Applications</Link>
                  </div>
                  <div className="item">
                    <Link to="/serverless">Serverless</Link>
                  </div>
                  <div className="item">
                    <Link to="/batch">Batch</Link>
                  </div>
                </div>
                <div className="column">
                  <div className="item has-text-weight-bold">
                    <Link to="/learn">Learn</Link>
                  </div>
                  <div className="item">
                    <Link to="/quickstart">Quickstart</Link>
                  </div>
                  <div className="item">
                    <Link to="/guides">Guides</Link>
                  </div>
                  <div className="item">
                    <Link to="/blog">Blog</Link>
                  </div>
                </div>
                <div className="column">
                  <div className="item has-text-weight-bold">
                    <Link to="/community">Community</Link>
                  </div>
                  <div className="item">
                    <Link to="/events">Events</Link>
                  </div>
                  <div className="item">
                    <Link to="/team">Team</Link>
                  </div>
                </div>
                <div className="column">
                  <div className="item has-text-weight-bold">
                    <Link to="/projects">Projects</Link>
                  </div>
                  <div className="item has-text-weight-bold">
                    <Link to="/training">Training</Link>
                  </div>
                  <div className="item has-text-weight-bold">
                    <Link to="/support">Support</Link>
                  </div>
                  <div className="item has-text-weight-bold">
                    <Link to="/thank-you">Thank You</Link>
                  </div>
                </div>
              </div>
            </div> */}
            <div className="container more">
              <div className="columns">
                <div className="column">
                  <p>
                    <img src={logo} alt="Spring" style={{ height: "48px" }} />
                  </p>
                  <p className="has-text-grey6">
                    © 2022 VMware, Inc. or its affiliates.{" "}
                    <a href="https://www.vmware.com/help/legal.html">
                      Terms of Use
                    </a>{" "}
                    •{" "}
                    <a href="https://www.vmware.com/help/privacy.html">
                      Privacy
                    </a>
                    • <Link to={"/trademarks"}>Trademark Guidelines</Link> •{" "}
                    <a href="https://www.vmware.com/help/privacy/california-privacy-rights.html">
                      Your California Privacy Rights
                    </a>{" "}
                    • <a>Cookie Settings</a>
                  </p>
                  <p className="has-text-grey-light">
                    Apache®, Apache Tomcat®, Apache Kafka®, Apache Cassandra™,
                    and Apache Geode™ are trademarks or registered trademarks of
                    the Apache Software Foundation in the United States and/or
                    other countries. Java™, Java™ SE, Java™ EE, and OpenJDK™ are
                    trademarks of Oracle and/or its affiliates. Kubernetes® is a
                    registered trademark of the Linux Foundation in the United
                    States and other countries. Linux® is the registered
                    trademark of Linus Torvalds in the United States and other
                    countries. Windows® and Microsoft® Azure are registered
                    trademarks of Microsoft Corporation. “AWS” and “Amazon Web
                    Services” are trademarks or registered trademarks of
                    Amazon.com Inc. or its affiliates. All other trademarks and
                    copyrights are property of their respective owners and are
                    only mentioned for informative purposes. Other names may be
                    trademarks of their respective owners.
                  </p>
                </div>
                <div className="social-links column is-2">
                  <a
                    href="https://www.youtube.com/user/SpringSourceDev"
                    className="button is-black is-rounded"
                  >
                    <FontAwesomeIcon icon={faYoutube} />
                  </a>
                  <a
                    href="https://github.com/spring-projects"
                    className="button is-black is-rounded"
                  >
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                  <a
                    href="https://twitter.com/springcentral"
                    className="button is-black is-rounded"
                  >
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
