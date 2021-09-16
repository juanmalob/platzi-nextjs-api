import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  //parte del servidor
  /*static async getInitialProps(ctx) {
      // aplicará para todas las paginas
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }*/

  render() {
    return (
      <Html>
        <Head>
          {/* favicon */}
          {/* webfonts */}
          {/* agregar estilos de otra libreria */}
          {/* scripts ç/js. */}
        </Head>
        <body className="my-body-class">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
