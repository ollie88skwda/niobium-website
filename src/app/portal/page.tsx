import Navbar from '@/components/Navbar';

const Portal = () => {
  return (
    <div style={{ minHeight: '100vh', background: '#0e0e0e' }}>
      <Navbar />
      <div style={{ paddingTop: '6rem' }}>
        {/* Existing content goes here */}
        <div style={{ position: 'sticky', top: '5.5rem' }}>
          {/* Stickiness and other existing behaviors */}
        </div>
      </div>
    </div>
  );
};

export default Portal;