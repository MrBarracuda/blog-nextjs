'use client'

export default function Error({error, reset}: any) {
  return (
    <div>
      Oops, something went wrong: {error.message}
      <button onClick={() => reset()}>Reload</button>
    </div>
  )
}