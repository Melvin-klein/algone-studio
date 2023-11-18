import './App.css'
import './wasm/algone.d.ts'

function App() {
    // const [count, setCount] = useState(0)

    return (
        <h1 className="text-3xl font-bold underline bg-red-500">
            Algone Studio is using version { wasmExports.getAlgoneVersion() }
        </h1>
    )
}

App.count = 3;

export default App
