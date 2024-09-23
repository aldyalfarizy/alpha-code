export default function Home() {
  return (
    <main>
      <div className="dark flex h-screen w-full flex-col justify-center gap-4 bg-background text-center text-black text-foreground dark:text-white">
        <h1 className="laptop:text-8xl h-28 bg-gradient-to-r from-blue-300 to-blue-800 bg-clip-text font-headline text-5xl font-bold text-transparent">
          alpha code
        </h1>
        <p className="laptop:text-3xl text-xl">
          The versatile boilerplate code.
        </p>
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
