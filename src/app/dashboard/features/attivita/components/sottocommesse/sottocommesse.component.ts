import { Component, Input } from '@angular/core';
import { delayedScrollTo } from 'src/app/utils/dom';
import { CommessaDto } from '../../models/commessa';
import { SottocommessaService } from '../../services/sottocommessa.service';

interface Tab {
  id: number;
  codiceCommessa: string;
}

@Component({
  selector: 'app-sottocommesse',
  templateUrl: './sottocommesse.component.html',
  styleUrls: ['./sottocommesse.component.css']
})
export class SottocommesseComponent {

  @Input("idCommessa") idCommessa!: number;

  activeTabId!: number;
  tabs: Tab[] = [];

  sottocommesse: CommessaDto[] = [];

  constructor(
    private sottocommessaService: SottocommessaService
  ) {}

  ngOnInit() {

    this.sottocommessaService
      .getSottocommesseByIdCommessa$(this.idCommessa)
      .subscribe(sottocommesse => this.sottocommesse = sottocommesse);
  }

  addTab(id: number, codiceCommessa: string) {

    const tabAlreadyExist = this.tabs.find(t => t.id === id);
    if (tabAlreadyExist) {
      this.activeTabId = id;
      delayedScrollTo("#sottocommessa-" + id);
      return;
    }

    this.activeTabId = id;

    this.tabs.push({
      id,
      codiceCommessa
    });

    delayedScrollTo("#sottocommessa-" + id);
  }

  closeTab(toRemove: number, evt?: MouseEvent) {

    // Open the tab to the left
    const tabToRemoveIndex = this.tabs.findIndex(tab => tab.id === toRemove);
    if (this.activeTabId === toRemove)
      if (tabToRemoveIndex === 0)
        this.activeTabId = this.tabs[tabToRemoveIndex + 1]?.id; // right
      else
        this.activeTabId = this.tabs[tabToRemoveIndex - 1]?.id; // left

    // Remove tab from the array
		this.tabs = this.tabs.filter((tab) => tab.id !== toRemove);

    if (evt) {
      evt.preventDefault();
      evt.stopImmediatePropagation();
    }
	}

  create() {}

  update(item?: any) {}

  delete(item: any) {}
}
