# Angular pluralSingular pipe
A custom and simple plural-singular pipe for Angular+

This is the code of the pipe:

```typescript
 ./plural-singular.pipe.ts

        import { Pipe, PipeTransform } from '@angular/core';

        @Pipe({
        name: 'pluralSingular'
        })
        export class PluralSingularPipe implements PipeTransform {
            transform(number: number, singularText: string, pluralText: string = null): string {
                let pluralWord = pluralText? pluralText : `${singularText}s`;
                return number > 1? `${number} ${pluralWord}` : `${number} ${singularText}` ;
            }
        }
```

You can copy the files into your own project and import `CustomPipesModule` to your `app.module` and it will be available in all your app.


## Usage

#### FOR REGULAR NOUNS 

Most singular nouns form the plural by adding -s. So the pipe adds it by default if no second parameter is passed

```html
<p> {{ someNumberVariable | pluralSingular:'adult' }} </p>

> output: 1 adult - 2 adults
```

#### FOR OTHER CASES

> A singular noun ending in s, x, z, ch, sh makes the plural by adding-es.

> A singular noun ending in a consonant and then y makes the plural by dropping the y and adding-ies.

> Irregular nouns.

```html
<p> {{ someNumberVariable | pluralSingular:'city':'cities }} </p>

> output: 1 city - 2 cities

<p> {{ someNumberVariable | pluralSingular:'bus':'buses }} </p>

> output: 1 bus - 2 buses 

<p> {{ someNumberVariable | pluralSingular:'child':'children}} </p>

> output: 1 child - 2 children
```

It can be used for the Spanish language.

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)