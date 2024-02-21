using db as db1 from '../db/schema';
service MyService {
    @odata.draft.enabled
    entity student as projection on db1.student;

}