# fg - product - card

este es un paqute de pruebas de despliegue de NPM.

### Francisco Garcia

## Ejemplo

```
import {ProductCard, ProductImage, ProductTitle, ProductBotton} from 'fg - product -card';

```

```

<ProductCard
product={product}
initialValues={{
                count: 4,
                maxCount: 10,
            }} >
    {({ reset, maxCount, isMaxCountReached, count, increaseBy }) => (
        <>
            <ProductImage />
            <ProductTitle />
            <ProductBotton />
        </>
    )}
</ProductCard>

```
