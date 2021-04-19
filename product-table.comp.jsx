import React from 'react';

import './product-table.style.css';
import ProductRow from '../product-row/product-row.comp';
import ProductCategoryRow from '../product-category-row/product-category-row.comp';
import ProductRowOne from '../product-rowone/product-rowone.comp';
import ProductRowTwo from '../product-rowtwo/product-rowtwo.comp';
import ProductCategoryRowOne from '../product-category-row-one/product-category-row-one.comp';
import ProductRowTree from '../product-rowtree/product-rowtree.comp';
import ProductRowFour from '../product-rowfour/product-rowfour.comp';
import ProductRowFive from '../product-rowfive/product-rowfive.comp';


const ProductTable = () => {
    return (
        <div className="product-table-container">
            <div>
             <b>Name             Price</b>
             <ProductCategoryRow/>
             <ProductRow/>
             <ProductRowOne/>
             <ProductRowTwo/>
             <ProductCategoryRowOne/>
             <ProductRowTree/>
             <ProductRowFour/>
             <ProductRowFive/>

             
             
            </div>
                       
                       
        </div>
    );
    
}

export default ProductTable;