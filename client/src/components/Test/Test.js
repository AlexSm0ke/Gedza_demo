// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { categoryThunk } from '../../redux/actions/categoryAction';
// import CardMaster from '../TemplateLight/4-MastersBlock/CardMaster/CardMaster';
// import ClientMastersPage from '../TemplateLight/4-MastersBlock/MastersBlock';

// function Test() {
//   const [input, setInput] = useState('740545');
//   const dispatch = useDispatch();

//   const inputHandler = (e) => {
//     setInput(e.target.value);
//   };

//   const submitHandler = (e) => {
//     e.preventDefault();
//     console.log('Input', input);
//     // dispatch(salonThunk(input));
//     dispatch(categoryThunk(input));
//     // categoryFetchToYC(input)
//     //   .then((categoryYc) => console.log('Category to YC', categoryYc));

//     setInput('');
//   };
//   return (
// <>
//   <div>Test!!!</div>
//   <form onSubmit={submitHandler}>
//     <div className="mb-3">
//       <input placeholder="Top text" value={input} onChange={inputHandler} type="text"
// className="form-control" />
//     </div>
//     <button type="submit" className="btn btn-primary">Submit</button>
//   </form>
// </>
// <CardMaster />
// <ClientMastersPage />
//   );
// }

// export default Test;
