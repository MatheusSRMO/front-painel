import PageContainer from './components/PageContainer'

export default function App() {
  return (
    <PageContainer>
      {Array(50).fill(0).map((_, i) => (
        <p key={i}>Olá mundo!</p>
      ))}
    </PageContainer>
  )
}
