import Layout from '../components/layout'
import homeStyle from '../styles/Home.module.css'
import React from 'react'

export default function Home() {
  return (
    <Layout>
      <form className={homeStyle.form} onSubmit={handleShortenRequest}>
        <h2>Shorten URL</h2>
        <input type="text" className={homeStyle.form_input} name="original-url" placeholder="URL" />
        <input type="submit" className={homeStyle.submit_button} value="Shorten" />
      </form>

      <form className={homeStyle.form} onSubmit={handleShortenRequest}>
        <h2>Unshorten URL</h2>
        <input type="text" className={homeStyle.form_input} name="shortened-url" placeholder="Shortened URL" />
        <input type="submit" className={homeStyle.submit_button} value="Unshorten" />
      </form>
    </Layout>
  )
}

async function handleShortenRequest(event) {
  console.log(event)
  /* const response = await fetch("http://eaneto-shorty.herokuapp.com", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
  const data = await response.json()*/
}

