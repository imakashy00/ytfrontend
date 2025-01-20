'use client'
import Link from "next/link";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { Mail } from "lucide-react";

const Footer = () => {
  return (
    <div>
      <div className="mb-20">
        <hr />
      </div>
      <div className="flex m-auto w-40">
        <ul className="flex space-x-20">
          <li>
            <a href="mailto:imakashy00@gmail.com" title="Email me">
              <Mail className="size-8" />
            </a>
          </li>
          <li>
            <Link href="https://x.com/imakashy00" target="_blank">
              <FontAwesomeIcon className="size-8" icon={faXTwitter} />
            </Link>
          </li>
        </ul>
      </div>
      <p className="text-center py-10">
        All rights reserved for Ytnotes &copy; 2025
      </p>
    </div>
  );
};

export default Footer;
