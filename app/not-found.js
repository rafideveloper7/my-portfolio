import Button from "@/components/Button";
import Container from "@/components/Container";

export const metadata = {
  title: "404",
  description: "The requested page could not be found."
};

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center pt-24">
      <Container className="text-center">
        <p className="font-display text-9xl font-black text-lime">404</p>
        <h1 className="mt-4 font-display text-4xl font-black sm:text-6xl">Page not found</h1>
        <p className="mx-auto mt-4 max-w-xl leading-8 text-muted">The page you opened does not exist or has moved. Return to the homepage and continue exploring the work.</p>
        <Button href="/" className="mt-8">Back to Home</Button>
      </Container>
    </main>
  );
}
