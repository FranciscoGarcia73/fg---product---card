import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ProductCard, ProductImage, ProductTitle, ProductBotton } from '../.';

const product = {
  id: '1',
  title: 'Coffe Mug - Card',
};

const App = () => {
  return (
    <>
      <ProductCard
        product={product}
        initialValues={{
          count: 4,
          maxCount: 10,
        }}
      >
        {({ reset, maxCount, isMaxCountReached, count, increaseBy }) => (
          <>
            <ProductImage />
            <ProductTitle />
            <ProductBotton />
          </>
        )}
      </ProductCard>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
