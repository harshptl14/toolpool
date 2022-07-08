// px to other format
export const pxToem = (px, setPX, setEM, defPixel) => {
    const em = px / defPixel;
    setEM(em);
    setPX(px);
    return em;
  };
  
  export const pxTopt = (px, setPX, setPT) => {
    const pt = px * 0.75;
    setPT(pt);
    setPX(px);
  };
  
  export const pxTopr = (pixValue, em, setPX, setPR) => {
    setPR(em * 100);
  };
  
  // em to other format
  export const emTopx = (em, setEM, setPX, defPixel) => {
    const px = em * defPixel;
    setPX(px);
    setEM(em);
  };
  
  export const emTopt = (em, setEM, setPT) => {
    const pt = em * 12;
    setPT(pt);
    setEM(em);
  };
  
  export const emTopr = (em, setEM, setPR) => {
    const perc = em * 100;
    setPR(perc);
    setEM(em);
  };
  
  // pt to other format
  export const ptToem = (pt, setPT, setEM) => {
    const em = pt / 12;
    setEM(em);
    setPT(pt);
    return em;
  };
  
  // pr to other format
  export const prToem = (pr, setPR, setEM) => {
    const em = pr / 100;
    setEM(em);
    setPR(pr);
    return em;
  };
  