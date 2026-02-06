import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            Amy Churchwell
          </h1>
          <ul className="flex items-center gap-3">
            <li>
              <a
                className="transition-colors hover:bg-[#383838]"
                href="mailto:hello@amychurchwell.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  className="dark:invert"
                  src="/icons/email.svg"
                  alt="e-mail icon"
                  width={20}
                  height={20}
                />
              </a>
            </li>
            <li>
              <a
                className="transition-colors hover:bg-[#383838]"
                href="https://www.instagram.com/amy.churchwell/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  className="dark:invert"
                  src="/icons/instagram.svg"
                  alt="Instagram logo"
                  width={20}
                  height={20}
                />
              </a>
            </li>
            <li>
              <a
                className="transition-colors hover:bg-[#383838]"
                href="https://bsky.app/profile/amychurchwell.bsky.social"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  className="dark:invert"
                  src="/icons/bluesky.svg"
                  alt="Bluesky logo"
                  width={20}
                  height={20}
                />
              </a>
            </li>
            <li>
              <a
                className="transition-colors hover:bg-[#383838]"
                href="https://tech.lgbt/@amy"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  className="dark:invert"
                  src="/icons/mastodon.svg"
                  alt="Bluesky logo"
                  width={20}
                  height={20}
                />
              </a>
            </li>
            <li>
              <a
                className="transition-colors hover:bg-[#383838]"
                href="https://github.com/amychurchwell"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  className="dark:invert"
                  src="/icons/github.svg"
                  alt="GitHub logo"
                  width={20}
                  height={20}
                />
              </a>
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
}
