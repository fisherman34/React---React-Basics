/**
 * Challenge: create a page that displays your favorite jokes
 * - Create a Joke component in its own file.
 * - Import and render 4-5 <Joke /> components
 * - Each Joke should receive a "setup" prop and a "punchline" prop
 *   and render those however you'd like
 * - Use your favorite 2-part jokes (setup & punchline), or check
 *   jokes.md file for some examples.
 * 
 * EXTRA CREDIT:
 * Some jokes are only a punchline with no setup:
 * 
 * E.g.: "It’s hard to explain puns to kleptomaniacs because 
 * they always take things literally."
 * 
 * If you don't pass in a "question" prop, how might you make it only 
 * show the punchline?
 */

import Joke from "./Joke"

export default function App() {
    return (
        <main>
            <Joke 
                Punchline="I can't wait to see her face light up when she opens it."
                upvotes={10}
                isPun={true}
            />
            <Joke 
                Setup="How did the hacker escape the police?"
                Punchline="He just ransomware!"
                isPun={true}
            />
            <Joke 
                Setup="Why don't pirates travel on mountain roads?"
                Punchline="Scurvy"
                isPun={true}
            />
            <Joke 
                Setup="Why do bees stay in the hive in the winter?"
                Punchline="Swarm."
                isPun={true}
            />
            <Joke 
                Setup="What's the best thing about Switzerland?"
                Punchline="I don't know, but the flag is a big plus!"
                isPun={false}
            />
        </main>
    )
}