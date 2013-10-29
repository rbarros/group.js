# Group

Find group of characters in a string.

## Getting Started
Download the [production version][min] or the [development version][max].

[min]: https://raw.github.com/rbarros/group.js/master/dist/Group.min.js
[max]: https://raw.github.com/rbarros/group.js/master/dist/Group.js

In your web page:

```html
<script src="dist/Group.min.js"></script>
<script>
var group = new Group('aaabbb');
// ["aaa","bbb"]
</script>
```

## Documentation
_(Coming soon)_

## Examples
 * new Group('012345679')  = ["012345679"]
 * new Group('666666666')  = ["666666666"]
 * new Group('166666666')  = ["1","66666666"]
 * new Group('025323232')  = ["025","323232"]
 * new Group('125252525')  = ["1","25252525"]
 * new Group('047777777')  = ["04","7777777"]
 * new Group('58123123')  = ["58","123123"]
 * new Group('aaabbb')  = ["aaa","bbb"]
 * new Group('123123123')  = ["123123123"]

## Release History

* **v1.1.0** - 2013-10-29
   - Add divide groups.

* **v1.0.2** - 2013-10-29
   - fix bug order by grupo_maior.

* **v1.0.1** - 2013-10-25
   - Fix bug return group.

* **v1.0.0** - 2013-10-21
   - Initial release.
