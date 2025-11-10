import React from 'react';

const Ubicacion = () => {
  return (
    <div 
      style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        width: '100%', 
        height: '100vh',
        
      }}
    >
      <iframe
        title="Ubicación"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11758296.104815006!2d2.124175805707276!3d40.80356989527924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12d4fe82448dd203%3A0xe22cf55c24635e6f!2sItalia!5e1!3m2!1ses!2sar!4v1762285166994!5m2!1ses!2sar"
        style={{ 
          border: 0, 
          width: '100%', 
          height: '100%' 
        }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
};

export default Ubicacion;
