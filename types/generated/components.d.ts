import type { Schema, Attribute } from '@strapi/strapi';

export interface ProductsFeatures extends Schema.Component {
  collectionName: 'components_products_features';
  info: {
    displayName: 'features';
    icon: 'train';
  };
  attributes: {
    HazMat: Attribute.Boolean & Attribute.DefaultTo<false>;
    Fragile: Attribute.Boolean & Attribute.DefaultTo<false>;
    Oversize: Attribute.Boolean & Attribute.DefaultTo<false>;
    Other: Attribute.Boolean & Attribute.DefaultTo<false>;
    otherFeatureDetails: Attribute.String;
    renderedOtherDetails: Attribute.String;
  };
}

export interface ProductsProducts extends Schema.Component {
  collectionName: 'components_products_products';
  info: {
    displayName: 'products';
    icon: 'grid';
  };
  attributes: {
    productDescription: Attribute.String & Attribute.Required;
    expectedQty: Attribute.Integer & Attribute.Required;
    qtyInMasterBox: Attribute.Integer & Attribute.Required;
    idAsin: Attribute.String;
    features: Attribute.Component<'products.features'>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'products.features': ProductsFeatures;
      'products.products': ProductsProducts;
    }
  }
}
