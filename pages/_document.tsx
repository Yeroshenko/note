import Document, { DocumentContext, Head, Html, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang='ru'>
        <Head />
        <body>
        <Main />
        <div id='portal' />
        <NextScript />
        </body>
      </Html>
    )
  }
}
