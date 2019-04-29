import React from "react"
import Image from "@components/atoms/image"
import TwitterIcon from "@components/atoms/icon/twitter"
import GithubIcon from "@components/atoms/icon/github"

const Footer = () => (
<footer>
  <section className="text-grey-darkest">
    <div className="p-6 container mx-auto px-4">
      <div className="w-full text-center my-10">
        <a href="https://github.com/Yumihiki" target="_blank" rel="noreferrer noopener" aria-label="github" className="text-grey hover:text-grey-darker mr-6">
          <GithubIcon className="fill-current w-10 h-10" />
        </a>
        <a href="https://twitter.com/sakura_willow" target="_blank" rel="noreferrer noopener" aria-label="twitter" className="text-grey hover:text-grey-darker mr-6">
          <TwitterIcon className="fill-current w-10 h-10" />
        </a>
      </div>
      <div className="w-full text-xs sm:text-sm text-center">
        Copyright © {new Date().getFullYear()} @sakura_willow All Rights Reserved.
      </div>
      <div className="flex items-center justify-center text-xs text-center mt-4">
        made with GatsbyJS
        <div
          className="rounded-full ml-1"
          style={{ width: `20px` }}
        >
          <Image filename="gatsby-icon.png" alt="GatsbyJS"　/>
        </div>
      </div>
    </div>
  </section>
</footer>
)

export default Footer