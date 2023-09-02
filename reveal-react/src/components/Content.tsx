import Reveal from 'reveal.js'
import '../../node_modules/reveal.js/dist/reset.css'
import '../../node_modules/reveal.js/dist/reveal.css'
import '../../node_modules/reveal.js/dist/theme/white.css'
import { useEffect } from 'react'

export default function Page() {
  useEffect(() => {
    let deck = new Reveal({
        backgroundTransition: 'slide',
        transition: 'slide',
        width: 500,
        height: 700,
     })
     deck.initialize();
},[])

return (
    <div className="reveal">
        <div className="slides" >
            <section >
                <h3>The HTML Presentation Framework</h3>
            </section>

            <section >
                <h2>Hello There</h2>
            </section>

            <section >
                <h2>Marvelous List</h2>
            </section>

            <section >
                <h2>Fantastic Ordered List</h2>
            </section>
        </div>
    </div>
  )
}