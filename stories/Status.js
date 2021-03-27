export const Status = ({ up, label }) => {
    const state = up ? 'text-blue' : 'text-amber'
    const icon = state === 'text-blue' ? '⬤' : '⬤'
return <div className="w-max flex rounded-md border border-accents-2 p-2 px-3"><p className="mr-1">Status:</p><p className={state}><small>{icon}</small> {label}</p></div>
}