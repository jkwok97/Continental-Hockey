import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { State } from './draft-current.reducer';
import { DraftTableDto } from '@cha/shared/api';
import { DraftCurrentActions } from './draft-current.actions';
import { DraftCurrentSelectors } from './draft-current.selectors';

@Injectable()
export class DraftCurrentFacade {
  isLoading$: Observable<boolean> = this.store.select(
    DraftCurrentSelectors.selectLoading
  );

  isLoaded$: Observable<boolean> = this.store.select(
    DraftCurrentSelectors.selectLoaded
  );

  draftTable$: Observable<DraftTableDto[]> = this.store.select(
    DraftCurrentSelectors.selectDraftTable
  );

  constructor(private store: Store<State>) {}

  getDraftTable() {
    this.store.dispatch(DraftCurrentActions.getDraftTable());
  }
}
