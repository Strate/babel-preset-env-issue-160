var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export class ApiStore {
    constructor(transport = realFetch, lockStore = new LockStore()) {
        this.addEntityToSet = (entityToAddTo, entityToAdd, fieldToAddTo, endpoint = getListEndpoint(entityToAddTo, fieldToAddTo), requestEntity, prependEntity) => Bluebird.try(() => __awaiter(this, void 0, void 0, function* () {
            return this.entityBasedPromise(entityToAddTo, "update", () => this._fetchEntities(endpoint, {}, entities => {
            }, newVersion).then(response => runInAction("then1", () => {
                fetchStates.set(fetchName, LoadState.Completed());
                return response.value.data[0];
            })))
        }));
    }
}
