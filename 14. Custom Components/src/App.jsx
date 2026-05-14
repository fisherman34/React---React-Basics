import { createRoot } from "react-dom/client"
const root = createRoot(document.getElementById("root"))

/**
 * Challenge (part 1):
 * Create a custom "Page" component
 * 
 * It should return an ordered list with the reasons why you're
 * excited to be learning React :)
 * 
 * Render the Page component.
 */

function Page() {
    return (
      <ol>
        <li>It's a popular library, so I'll be in demand as a developer!</li>
        <li>It's a powerful tool for building user interfaces.</li>
        <li>It has a large and supportive community.</li>
      </ol>
    )
}

root.render( 
    <div>
        <Page />
    </div>
)