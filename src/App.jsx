
import UserProfile from './UserProfile';

function App() {
  return (
    <div style={{ padding: '40px', backgroundColor: '#f0f2f5', minHeight: '100vh' }}>
      <UserProfile 
        name="Jane Smith" 
        bio="Creative Designer based in NYC." 
        image="https://imgproxy.attic.sh/insecure/f:webp/q:90/w:384/plain/https://attic.sh/8hjgvpcrgz7ol3kng78ipde1nt4u"
      />
      {/* Bonus: Second component using default props */}
      <UserProfile /> 
    </div>
  );
}

export default App;









