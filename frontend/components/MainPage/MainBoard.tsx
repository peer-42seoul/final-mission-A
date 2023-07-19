export default function MainBoard({children}: {children?: React.ReactNode}) {
  return (
    <div
      style={{
        flexGrow: 8,
        display: 'flex',
        flexDirection: 'column',
        marginRight: '10px',
        marginLeft: '80px'
      }}>
        {children}
    </div>
  )
}