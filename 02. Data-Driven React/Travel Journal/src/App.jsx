import Header from "./components/Header"
import Entry from "./components/Entry"
import data from "./data"

/**
 * Challenge: pass props to the Entry component to display
 * its data. See the `data.md` file for each prop name and its
 * value.
 * 
 * Then on the Entry component, receive and display the values
 * for those props. In the end, the page should look the same
 * as it does now, but without all the hard-coded data in the
 * component
 */

export default function App() {

    const entryElemts = data.map((entry) => {
        return (
            <Entry 
                img={{
                    src: entry.img.src,
                    alt: entry.img.alt
                }}
                title={entry.title}
                country={entry.country}
                googleMapsLink={entry.googleMapsLink}
                dates={entry.dates}
                text={entry.text}
            />
        )
    })

    return (
        <>
            <Header />
            <main className="container">
                {entryElemts}
            </main>
        </>
    )
}