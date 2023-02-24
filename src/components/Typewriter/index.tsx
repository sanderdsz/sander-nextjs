import Typewriter from 'typewriter-effect'

const Type = () => {
  return (
    <Typewriter
      options={{
        autoStart: true,
        loop: true
      }}
      onInit={(typewriter) => {
        typewriter
          .typeString("Hello, my name is")
          .pauseFor(2000)
          .deleteAll()
          .pauseFor(300)
          .typeString("こんにちは、私の名前は")
          .pauseFor(2000)
          .deleteAll()
          .pauseFor(300)
          .typeString("Olá, meu nome é")
          .pauseFor(2000)
          .deleteAll()
          .pauseFor(300)
          .typeString("Ciao, il mio nome è")
          .pauseFor(2000)
          .deleteAll()
          .pauseFor(300)
          .typeString("Salve. Nomen mihi est")
          .pauseFor(2000)
          .deleteAll()
          .pauseFor(300)
          .start();
      }}
    />
  )
}

export { Type as Typewriter }