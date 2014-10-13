/**
 * Test Dom for editor
 * @author yiminghe@gmail.com
 */

var Dom = require('dom'),
    $ = require('node');

/*jshint quotmark:false*/
/*jshint quotmark:false*/
describe("dom", function () {
    it("_4eIsBlockBoundary works", function () {
        var div = Dom.create("<div>");
        var span = Dom.create("<span>");
        Dom.append(div, 'body');
        Dom.append(span, 'body');
        expect(Dom._4eIsBlockBoundary(div)).to.be(true);
        expect(Dom._4eIsBlockBoundary(span)).to.be(false);
        expect(Dom._4eIsBlockBoundary(span, {
            span: 1
        })).to.be(true);
        Dom.remove(div);
        Dom.remove(span);
    });

    it("_4eIndex works", function () {
        var div = Dom.create("<div><span>1</span><span>2</span></div>");
        Dom.append(div, 'body');
        expect(Dom._4eIndex(div.childNodes[1])).to.be(1);
        Dom.remove(div);
    });

    it("_4eMove works", function () {
        var div = Dom.create("<div>1</div>");
        var span = Dom.create("<span>");
        Dom.append(div, 'body');
        Dom.append(span, 'body');

        Dom._4eMove(span, div, undefined);
        expect(div.lastChild).to.be(span);
        Dom._4eMove(span, div, true);
        expect(div.firstChild).to.be(span);


        Dom.remove(div);
        Dom.remove(span);
    });

    it("nodeName works", function () {
        expect(Dom.nodeName(Dom.create("<div>"))).to.be('div');
    });

    it("_4eIsIdentical works", function () {
        var div = Dom.create("<div data-x='y'>1</div>");
        var div3 = Dom.create("<div data-x='y'>1</div>");
        expect(Dom._4eIsIdentical(div, div3)).to.be(true);
        Dom.attr(div, "data-x", "z");
        expect(Dom._4eIsIdentical(div, div3)).to.be(false);
    });

    it("_4eMoveChildren works", function () {
        var div = Dom.create("<div>1<b>2</b></div>");
        var span = Dom.create("<span>3<i>4</i></span>");
        Dom._4eMoveChildren(span, div);
        expect(div.innerHTML.toLowerCase()).to.be("1<b>2</b>3<i>4</i>");
        div = Dom.create("<div>1<b>2</b></div>");
        span = Dom.create("<span>3<i>4</i></span>");
        Dom._4eMoveChildren(span, div, true);
        expect(div.innerHTML.toLowerCase()).to.be("3<i>4</i>1<b>2</b>");
    });

    it("_4eIsEmptyInlineRemovable works", function () {
        var div = Dom.create("<div>1</div>");
        expect(Dom._4eIsEmptyInlineRemovable(div)).to.be(false);
        var span = Dom.create("<span><b></b><s><span></span></s>" +
            "<span _ke_bookmark='1'>1</span></span>");
        expect(Dom._4eIsEmptyInlineRemovable(span)).to.be(true);
    });

    it("_4eMergeSiblings works", function () {
        var div = Dom.create("<div >" +
            "<span class='target'>" +
            //"1<b>2</b>" +
            "<span class='innerlast'>innerlast1</span>" +
            "</span>" +
            "<span id='s1' _ke_bookmark='1'></span>" +
            "<b id='b1'></b>" +
            "<span class='target'>" +
            "<span class='innerlast'>innerfirst2</span>" +
            "3<b>4</b>" +
            "<span class='innerlast'>innerlast2</span>" +
            "</span>" +
            "<span id='s2' _ke_bookmark='1'></span>" +
            "<b id='b2'></b>" +
            "<span class='target'>" +
            "<span class='innerlast'>innerfirst3</span>" +
            //"5<b>6</b>" +
            "</span>" +
            "</div>");

        Dom.append(div, 'body');

        var target = Dom.query('.target', div)[1];

        Dom._4eMergeSiblings(target);

        expect(div.innerHTML.toLowerCase().replace(/=(\w+)/g, "=\"$1\""))
            .to.be([
                "<span class='target'>" ,
                // "1<b>2</b>" ,
                "<span class='innerlast'>" ,
                "innerlast1" ,
                "<span id='s1' _ke_bookmark='1'></span>" ,
                "<b id='b1'></b>" ,
                "innerfirst2" ,
                "</span>" ,
                "3<b>4</b>" ,
                "<span class='innerlast'>" ,
                "innerlast2" ,
                "<span id='s2' _ke_bookmark='1'></span>" ,
                "<b id='b2'></b>" ,
                "innerfirst3" ,
                "</span>" ,
                // "5<b>6</b>" ,
                "</span>"
            ].join("").replace(/'/g, '"'));

        Dom.remove(div);
    });

    it("_4eAddress works", function () {
        var div = $("<div><span>1<span></span></span></div>");
        div.prependTo('body');
        var span = div.first().last();
        var bodyIndex = $('body')._4eIndex();
        expect(span._4eAddress()).to.eql([bodyIndex, 0, 0, 1]);
        div.remove();
    });
});
