# TipTap LanguageTool NextJS

A project for integrating [Languagetool](https://languagetool.org/) with [TipTap](https://tiptap.dev). You can have your
self-hosted instance of LanguageTool, details for that are [here](https://dev.languagetool.org/http-server).

## Original Project

This project is forked from [Vue.js TypeScript template](https://github.com/sereneinserenade/tiptap-languagetool). The
original project was built with Vue.js and TypeScript. I have converted it to Next.js and TypeScript.

## Language Tool

**LanguageTool** is an Open Source proofreading software for English, Spanish, French, German,
Portuguese, Polish, Dutch, and [more than 20 other languages](https://languagetool.org/languages/).
It finds many errors that a simple spell checker cannot detect.

* **[Jobs at LanguageTool](https://languagetool.org/careers)**
* [LanguageTool Forum](https://forum.languagetool.org)
* [How to run your own LanguageTool server](https://dev.languagetool.org/http-server)
* [HTTP API documentation](https://languagetool.org/http-api/swagger-ui/#!/default/post_check)
* [How to use our public server via HTTP](https://dev.languagetool.org/public-http-api)
* [How to use LanguageTool from Java](https://dev.languagetool.org/java-api) ([Javadoc](https://languagetool.org/development/api/index.html?org/languagetool/JLanguageTool.html))

For more information, please see our homepage at https://languagetool.org,
[this README](https://github.com/languagetool-org/languagetool/blob/master/languagetool-standalone/README.md),
and [CHANGES](https://github.com/languagetool-org/languagetool/blob/master/languagetool-standalone/CHANGES.md).

The LanguageTool core (this repo) is freely available under the LGPL 2.1 or later.

## Docker

Try one of the following projects for a community-contributed Docker file for LanguageTool

- https://github.com/meyayl/docker-languagetool ([Docker Hub](https://hub.docker.com/r/meyay/languagetool))
- https://github.com/Erikvl87/docker-languagetool ([Docker Hub](https://hub.docker.com/r/erikvl87/languagetool))
- https://github.com/silvio/docker-languagetool ([Docker Hub](https://hub.docker.com/r/silviof/docker-languagetool))

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser and navigate to /language-tool to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and
load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions
are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use
the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme)
from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
