using CatalogService from './catalog-service';
annotate CatalogService.Authors with @(
  UI: {
    SelectionFields: [ ID ],
    LineItem: [
      {Value: ID},
      {Value: name, Label:'{i18n>Author}'}
   
    ]
  }
);


annotate CatalogService.Books with @(
  UI: {
    SelectionFields: [ ID ],
    LineItem: [
      {Value: ID},
      {Value: stock},
       {Value: title},
   
    ]
  }
);