using my  from '../db/schema';

service Stats {
    @readonly
    entity OrderInfo as projection on my.bookshop.Orders excluding {
        createdAt,
        createdBy,
        modifiedBy,
        modifiedAt,
        book
    };
}
