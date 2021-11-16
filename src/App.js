export function App() {
    const name = "Pomodoro"
    return (
        <>
        <h1>Hello {name}!</h1>
        <Timer className={"timer"} />       
    
    );
}