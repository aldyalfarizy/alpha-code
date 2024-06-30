export default function Home() {
  return (
    <main>
      <div className="flex h-screen flex-col justify-center gap-4 text-center text-black dark:text-white">
        <h1 className="font-headline h-28 bg-gradient-to-r from-blue-300 to-blue-800 bg-clip-text text-5xl font-bold text-transparent lg:text-8xl">
          alpha code
        </h1>
        <p className="text-xl lg:text-3xl">The versatile boilerplate code.</p>
        <p>
          by{" "}
          <a
            href="https://www.alpharizy.com"
            target="_blank"
            rel="noopener noreferrer"
            title="Aldy Alfarizy"
            className="border-b border-blue-300 pb-1"
          >
            Aldy Alfarizy
          </a>
        </p>
      </div>
    </main>
  );
}
