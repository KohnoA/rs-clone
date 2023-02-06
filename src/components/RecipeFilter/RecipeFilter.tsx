import { Route, Routes } from 'react-router-dom';
import Recipes from '../../pages/Recipes/Recipes';
import { URLS } from '../../types/types';
import FilterComponent from './FilterComponent';
import styles from './RecipeFilter.module.scss'
const RecipeFilter: React.FC = () => {
    return (
        <div className={styles.filter}>
                  <h2 className={styles.filter__header}>Category</h2>
                  <ul className={styles.filterList}> 
                  <FilterComponent
                        id={0}
                        query={'diet'}
                         header={'Diet'}
                         item1={'balanced'}
                         item2={'high-fiber'}
                         item3={'high-protein'}
                         item4={'low-carb'}
                         item5={'low-fat'}
                         item6={'low-sodium'}
                        />
                  <FilterComponent
                        id={1}
                        query={'health'}
                         header={'Health'}
                         item1={'vegetarian'}
                         item2={'alcohol-free'}
                         item3={'vegan'}
                         item4={'pork-free'}
                         item5={'gluten-free'}
                         item6={'fish-free'}
                        />
                  <FilterComponent
                        id={2}
                        query={'mealType'}
                         header={'Meal type'}
                         item1={'breakfast'}
                         item2={'lunch'}
                         item3={'dinner'}
                         item4={'snack'}
                         item5={'tea-time'}
                        />
                  <FilterComponent
                        id={3}
                        query={'cuisine'}
                         header={'Cuisune'}
                         item1={'American'}
                         item2={'Asian'}
                         item3={'French'}
                         item4={'Italian'}
                         item5={'Mexican'}
                        />
                  </ul>
            </div>
    );
};

export default RecipeFilter;

{/* <li className={styles.filterList__item}>
<img className={styles.filterList__img} src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTEiIGhlaWdodD0iMTUiIHZpZXdCb3g9IjAgMCAxMSAxNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik01LjYxNTYzIDEzLjQzNzVDOC4xNTI1IDEzLjQzNzUgMTAuMDMxMiAxMS42NjI1IDEwLjAzMTIgOS4yMTg3M0MxMC4wMzEyIDcuNzU4MTEgOS4zNDgxMyA3LjAzODExIDguMzU3NSA1Ljk5NDk4TDguMzQ0MzggNS45ODA2MUM3LjQ0NDM4IDUuMDMyNDkgNi4zODI1IDMuODg2MjMgNi4wNjM3NSAxLjg4MjQ4QzUuNTkxNzIgMi4xNTk3NiA1LjE4NDQ4IDIuNTM0ODIgNC44NjkzOCAyLjk4MjQ4QzQuMzc3NSAzLjY5NzQ4IDQuMTUyNSA0LjYyODExIDQuNzM0MzggNS43OTE4NkM1LjExMTI1IDYuNTQ0OTggNS4yMiA3LjUwNDM2IDQuNTYxMjUgOC4xNjMxMUM0LjE1MDYzIDguNTczNzMgMy40NiA4Ljg1MDYxIDIuNzEzNzUgOC41MjkzNkMyLjI0Mzc1IDguMzI2ODYgMS44NjgxMiA3LjkzMjQ4IDEuNTY1IDcuNDEwNjFDMS4yMTA2MyA3Ljg1MTg2IDAuOTY4NzUgOC40OTgxMSAwLjk2ODc1IDkuMjE4NzNDMC45Njg3NSAxMS42MjMxIDMuMDIzNzUgMTMuNDM3NSA1LjYxNTYzIDEzLjQzNzVaTTYuOTE1NjMgMS4wMTY4NkM2LjkwNSAwLjgwMTIzNSA2LjczMDYzIDAuNjI2MjM1IDYuNTIwNjMgMC42Nzc0ODVDNS4wNiAxLjAzNjg2IDIuMzkyNSAzLjIwMzczIDMuODk1NjIgNi4yMTEyM0M0LjE5MTg3IDYuODAyNDggNC4xNDA2MiA3LjI1ODExIDMuODk4MTMgNy40OTk5OEMzLjQ5ODEzIDcuODk5OTggMi43MjY4NyA3LjkyNzQ4IDIuMTAxMjUgNi4zNjU2MUMyLjAxOTM3IDYuMTYxMjMgMS43OSA2LjA0NzQ4IDEuNTk5MzcgNi4xNTY4NkMwLjYzMjUgNi43MTE4NiAwLjAzMTI1IDcuOTQ0MzYgMC4wMzEyNSA5LjIxODczQzAuMDMxMjUgMTIuMjM2OSAyLjYwNzUgMTQuMzc1IDUuNjE1NjMgMTQuMzc1QzguNjIzMTMgMTQuMzc1IDEwLjk2ODggMTIuMjI2MiAxMC45Njg4IDkuMjE4NzNDMTAuOTY4OCA3LjM4MTg2IDEwLjA1MjUgNi40MTc0OCA5LjA5IDUuNDA0OThDOC4wODM3NSA0LjM0NjIzIDYuOTE1NjMgMy4yMzI0OCA2LjkxNTYzIDEuMDE2ODZaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K' alt="type icon" />
 <a className={styles.filterList__link} href="/recipes/">food</a> </li>
<li className={styles.filterList__item}>
<img className={styles.filterList__img} src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTEiIGhlaWdodD0iMTUiIHZpZXdCb3g9IjAgMCAxMSAxNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik01LjYxNTYzIDEzLjQzNzVDOC4xNTI1IDEzLjQzNzUgMTAuMDMxMiAxMS42NjI1IDEwLjAzMTIgOS4yMTg3M0MxMC4wMzEyIDcuNzU4MTEgOS4zNDgxMyA3LjAzODExIDguMzU3NSA1Ljk5NDk4TDguMzQ0MzggNS45ODA2MUM3LjQ0NDM4IDUuMDMyNDkgNi4zODI1IDMuODg2MjMgNi4wNjM3NSAxLjg4MjQ4QzUuNTkxNzIgMi4xNTk3NiA1LjE4NDQ4IDIuNTM0ODIgNC44NjkzOCAyLjk4MjQ4QzQuMzc3NSAzLjY5NzQ4IDQuMTUyNSA0LjYyODExIDQuNzM0MzggNS43OTE4NkM1LjExMTI1IDYuNTQ0OTggNS4yMiA3LjUwNDM2IDQuNTYxMjUgOC4xNjMxMUM0LjE1MDYzIDguNTczNzMgMy40NiA4Ljg1MDYxIDIuNzEzNzUgOC41MjkzNkMyLjI0Mzc1IDguMzI2ODYgMS44NjgxMiA3LjkzMjQ4IDEuNTY1IDcuNDEwNjFDMS4yMTA2MyA3Ljg1MTg2IDAuOTY4NzUgOC40OTgxMSAwLjk2ODc1IDkuMjE4NzNDMC45Njg3NSAxMS42MjMxIDMuMDIzNzUgMTMuNDM3NSA1LjYxNTYzIDEzLjQzNzVaTTYuOTE1NjMgMS4wMTY4NkM2LjkwNSAwLjgwMTIzNSA2LjczMDYzIDAuNjI2MjM1IDYuNTIwNjMgMC42Nzc0ODVDNS4wNiAxLjAzNjg2IDIuMzkyNSAzLjIwMzczIDMuODk1NjIgNi4yMTEyM0M0LjE5MTg3IDYuODAyNDggNC4xNDA2MiA3LjI1ODExIDMuODk4MTMgNy40OTk5OEMzLjQ5ODEzIDcuODk5OTggMi43MjY4NyA3LjkyNzQ4IDIuMTAxMjUgNi4zNjU2MUMyLjAxOTM3IDYuMTYxMjMgMS43OSA2LjA0NzQ4IDEuNTk5MzcgNi4xNTY4NkMwLjYzMjUgNi43MTE4NiAwLjAzMTI1IDcuOTQ0MzYgMC4wMzEyNSA5LjIxODczQzAuMDMxMjUgMTIuMjM2OSAyLjYwNzUgMTQuMzc1IDUuNjE1NjMgMTQuMzc1QzguNjIzMTMgMTQuMzc1IDEwLjk2ODggMTIuMjI2MiAxMC45Njg4IDkuMjE4NzNDMTAuOTY4OCA3LjM4MTg2IDEwLjA1MjUgNi40MTc0OCA5LjA5IDUuNDA0OThDOC4wODM3NSA0LjM0NjIzIDYuOTE1NjMgMy4yMzI0OCA2LjkxNTYzIDEuMDE2ODZaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K' alt="type icon" />
 <a className={styles.filterList__link} href="/recipes/">eat</a> </li>
<li className={styles.filterList__item}>
<img className={styles.filterList__img} src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTEiIGhlaWdodD0iMTUiIHZpZXdCb3g9IjAgMCAxMSAxNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik01LjYxNTYzIDEzLjQzNzVDOC4xNTI1IDEzLjQzNzUgMTAuMDMxMiAxMS42NjI1IDEwLjAzMTIgOS4yMTg3M0MxMC4wMzEyIDcuNzU4MTEgOS4zNDgxMyA3LjAzODExIDguMzU3NSA1Ljk5NDk4TDguMzQ0MzggNS45ODA2MUM3LjQ0NDM4IDUuMDMyNDkgNi4zODI1IDMuODg2MjMgNi4wNjM3NSAxLjg4MjQ4QzUuNTkxNzIgMi4xNTk3NiA1LjE4NDQ4IDIuNTM0ODIgNC44NjkzOCAyLjk4MjQ4QzQuMzc3NSAzLjY5NzQ4IDQuMTUyNSA0LjYyODExIDQuNzM0MzggNS43OTE4NkM1LjExMTI1IDYuNTQ0OTggNS4yMiA3LjUwNDM2IDQuNTYxMjUgOC4xNjMxMUM0LjE1MDYzIDguNTczNzMgMy40NiA4Ljg1MDYxIDIuNzEzNzUgOC41MjkzNkMyLjI0Mzc1IDguMzI2ODYgMS44NjgxMiA3LjkzMjQ4IDEuNTY1IDcuNDEwNjFDMS4yMTA2MyA3Ljg1MTg2IDAuOTY4NzUgOC40OTgxMSAwLjk2ODc1IDkuMjE4NzNDMC45Njg3NSAxMS42MjMxIDMuMDIzNzUgMTMuNDM3NSA1LjYxNTYzIDEzLjQzNzVaTTYuOTE1NjMgMS4wMTY4NkM2LjkwNSAwLjgwMTIzNSA2LjczMDYzIDAuNjI2MjM1IDYuNTIwNjMgMC42Nzc0ODVDNS4wNiAxLjAzNjg2IDIuMzkyNSAzLjIwMzczIDMuODk1NjIgNi4yMTEyM0M0LjE5MTg3IDYuODAyNDggNC4xNDA2MiA3LjI1ODExIDMuODk4MTMgNy40OTk5OEMzLjQ5ODEzIDcuODk5OTggMi43MjY4NyA3LjkyNzQ4IDIuMTAxMjUgNi4zNjU2MUMyLjAxOTM3IDYuMTYxMjMgMS43OSA2LjA0NzQ4IDEuNTk5MzcgNi4xNTY4NkMwLjYzMjUgNi43MTE4NiAwLjAzMTI1IDcuOTQ0MzYgMC4wMzEyNSA5LjIxODczQzAuMDMxMjUgMTIuMjM2OSAyLjYwNzUgMTQuMzc1IDUuNjE1NjMgMTQuMzc1QzguNjIzMTMgMTQuMzc1IDEwLjk2ODggMTIuMjI2MiAxMC45Njg4IDkuMjE4NzNDMTAuOTY4OCA3LjM4MTg2IDEwLjA1MjUgNi40MTc0OCA5LjA5IDUuNDA0OThDOC4wODM3NSA0LjM0NjIzIDYuOTE1NjMgMy4yMzI0OCA2LjkxNTYzIDEuMDE2ODZaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K' alt="type icon" />
 <a className={styles.filterList__link} href="/recipes/">brealfast</a> </li>
<li className={styles.filterList__item}>
<img className={styles.filterList__img} src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTEiIGhlaWdodD0iMTUiIHZpZXdCb3g9IjAgMCAxMSAxNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik01LjYxNTYzIDEzLjQzNzVDOC4xNTI1IDEzLjQzNzUgMTAuMDMxMiAxMS42NjI1IDEwLjAzMTIgOS4yMTg3M0MxMC4wMzEyIDcuNzU4MTEgOS4zNDgxMyA3LjAzODExIDguMzU3NSA1Ljk5NDk4TDguMzQ0MzggNS45ODA2MUM3LjQ0NDM4IDUuMDMyNDkgNi4zODI1IDMuODg2MjMgNi4wNjM3NSAxLjg4MjQ4QzUuNTkxNzIgMi4xNTk3NiA1LjE4NDQ4IDIuNTM0ODIgNC44NjkzOCAyLjk4MjQ4QzQuMzc3NSAzLjY5NzQ4IDQuMTUyNSA0LjYyODExIDQuNzM0MzggNS43OTE4NkM1LjExMTI1IDYuNTQ0OTggNS4yMiA3LjUwNDM2IDQuNTYxMjUgOC4xNjMxMUM0LjE1MDYzIDguNTczNzMgMy40NiA4Ljg1MDYxIDIuNzEzNzUgOC41MjkzNkMyLjI0Mzc1IDguMzI2ODYgMS44NjgxMiA3LjkzMjQ4IDEuNTY1IDcuNDEwNjFDMS4yMTA2MyA3Ljg1MTg2IDAuOTY4NzUgOC40OTgxMSAwLjk2ODc1IDkuMjE4NzNDMC45Njg3NSAxMS42MjMxIDMuMDIzNzUgMTMuNDM3NSA1LjYxNTYzIDEzLjQzNzVaTTYuOTE1NjMgMS4wMTY4NkM2LjkwNSAwLjgwMTIzNSA2LjczMDYzIDAuNjI2MjM1IDYuNTIwNjMgMC42Nzc0ODVDNS4wNiAxLjAzNjg2IDIuMzkyNSAzLjIwMzczIDMuODk1NjIgNi4yMTEyM0M0LjE5MTg3IDYuODAyNDggNC4xNDA2MiA3LjI1ODExIDMuODk4MTMgNy40OTk5OEMzLjQ5ODEzIDcuODk5OTggMi43MjY4NyA3LjkyNzQ4IDIuMTAxMjUgNi4zNjU2MUMyLjAxOTM3IDYuMTYxMjMgMS43OSA2LjA0NzQ4IDEuNTk5MzcgNi4xNTY4NkMwLjYzMjUgNi43MTE4NiAwLjAzMTI1IDcuOTQ0MzYgMC4wMzEyNSA5LjIxODczQzAuMDMxMjUgMTIuMjM2OSAyLjYwNzUgMTQuMzc1IDUuNjE1NjMgMTQuMzc1QzguNjIzMTMgMTQuMzc1IDEwLjk2ODggMTIuMjI2MiAxMC45Njg4IDkuMjE4NzNDMTAuOTY4OCA3LjM4MTg2IDEwLjA1MjUgNi40MTc0OCA5LjA5IDUuNDA0OThDOC4wODM3NSA0LjM0NjIzIDYuOTE1NjMgMy4yMzI0OCA2LjkxNTYzIDEuMDE2ODZaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K' alt="type icon" />
 <a className={styles.filterList__link} href="/recipes/">lunch</a> </li>
<li className={styles.filterList__item}>
<img className={styles.filterList__img} src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTEiIGhlaWdodD0iMTUiIHZpZXdCb3g9IjAgMCAxMSAxNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik01LjYxNTYzIDEzLjQzNzVDOC4xNTI1IDEzLjQzNzUgMTAuMDMxMiAxMS42NjI1IDEwLjAzMTIgOS4yMTg3M0MxMC4wMzEyIDcuNzU4MTEgOS4zNDgxMyA3LjAzODExIDguMzU3NSA1Ljk5NDk4TDguMzQ0MzggNS45ODA2MUM3LjQ0NDM4IDUuMDMyNDkgNi4zODI1IDMuODg2MjMgNi4wNjM3NSAxLjg4MjQ4QzUuNTkxNzIgMi4xNTk3NiA1LjE4NDQ4IDIuNTM0ODIgNC44NjkzOCAyLjk4MjQ4QzQuMzc3NSAzLjY5NzQ4IDQuMTUyNSA0LjYyODExIDQuNzM0MzggNS43OTE4NkM1LjExMTI1IDYuNTQ0OTggNS4yMiA3LjUwNDM2IDQuNTYxMjUgOC4xNjMxMUM0LjE1MDYzIDguNTczNzMgMy40NiA4Ljg1MDYxIDIuNzEzNzUgOC41MjkzNkMyLjI0Mzc1IDguMzI2ODYgMS44NjgxMiA3LjkzMjQ4IDEuNTY1IDcuNDEwNjFDMS4yMTA2MyA3Ljg1MTg2IDAuOTY4NzUgOC40OTgxMSAwLjk2ODc1IDkuMjE4NzNDMC45Njg3NSAxMS42MjMxIDMuMDIzNzUgMTMuNDM3NSA1LjYxNTYzIDEzLjQzNzVaTTYuOTE1NjMgMS4wMTY4NkM2LjkwNSAwLjgwMTIzNSA2LjczMDYzIDAuNjI2MjM1IDYuNTIwNjMgMC42Nzc0ODVDNS4wNiAxLjAzNjg2IDIuMzkyNSAzLjIwMzczIDMuODk1NjIgNi4yMTEyM0M0LjE5MTg3IDYuODAyNDggNC4xNDA2MiA3LjI1ODExIDMuODk4MTMgNy40OTk5OEMzLjQ5ODEzIDcuODk5OTggMi43MjY4NyA3LjkyNzQ4IDIuMTAxMjUgNi4zNjU2MUMyLjAxOTM3IDYuMTYxMjMgMS43OSA2LjA0NzQ4IDEuNTk5MzcgNi4xNTY4NkMwLjYzMjUgNi43MTE4NiAwLjAzMTI1IDcuOTQ0MzYgMC4wMzEyNSA5LjIxODczQzAuMDMxMjUgMTIuMjM2OSAyLjYwNzUgMTQuMzc1IDUuNjE1NjMgMTQuMzc1QzguNjIzMTMgMTQuMzc1IDEwLjk2ODggMTIuMjI2MiAxMC45Njg4IDkuMjE4NzNDMTAuOTY4OCA3LjM4MTg2IDEwLjA1MjUgNi40MTc0OCA5LjA5IDUuNDA0OThDOC4wODM3NSA0LjM0NjIzIDYuOTE1NjMgMy4yMzI0OCA2LjkxNTYzIDEuMDE2ODZaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K' alt="type icon" />
  <a className={styles.filterList__link} href="/recipes/">dinner</a> </li> */}