<template>
  <div class="hello">
    <div>
        <span>
          <button @click="save" class="btn">Save</button>
        </span>
    </div>
    <div class="edit-row"
         contenteditable
         @input="onChange"
         @click="onClick"
         id="raw"
    >
<!--      <div>123123131</div>-->
<!--      <div>888</div>-->
<!--      <div>999</div>-->
<!--      <div data-bb="img">-->
<!--        <img src="https://www.baidu.com/img/dong_e70247ce4b0a3e5ba73e8b3b05429d84.gif" style="width: 50%"/>-->
<!--      </div>-->
    </div>
    <div>
      <p>预览</p>
      <div id="mdshow" class="prearea"></div>
      <div v-html="premd" class="prearea"></div>
    </div>
  </div>
</template>

<script>
// import { markdown } from 'markdown';
import MarkdownIt from 'markdown-it';
import emoji from 'markdown-it-emoji';
import markdownItTocAndAnchor from 'markdown-it-toc-and-anchor';
import hljs from 'highlight.js';

import '@/assets/scss/noteexp.scss';

export default {
  name: 'NoteExp',
  data() {
    return {
      premd: '',
    };
  },
  props: {
    msg: String,
  },
  created() {
    this.save();
  },
  methods: {
    onChange(e) {
      // console.log(e);
      console.log(e.target);
    },
    onClick(e) {
      console.log(e.clientX, e.clientY);
      console.log(e.target);
      console.log(window.getSelection());
      this.save();
    },
    onKeyUp(e) {
      console.log(e);
    },
    save() {
      const md2 = '# book\nSyntax highlighting\n'
        + '\n'
        + '``` javascript\n'
        + 'var foo = function (bar) {\n'
        + '  return bar++;\n'
        + '};\n'
        + '\n'
        + 'console.log(foo(5));\n'
        + '```\n'
        + '333333\n'
      + '# bbb';

      // const md2 = '# h1 Heading 8-)\n'
      //   + '<h2> h2 Heading by HTML</h2>\n'
      //   + '## h2 Heading\n'
      //   + '### h3 Heading\n'
      //   + '\n'
      //   + '## Horizontal Rules\n'
      //   + '\n'
      //   + '___\n'
      //   + '\n'
      //   + '---\n'
      //   + '\n'
      //   + '***\n'
      //   + '\n'
      //   + '## Typographic replacements\n'
      //   + '\n'
      //   + 'Enable typographer option to see result.\n'
      //   + '\n'
      //   + '(c) (C) (r) (R) (tm) (TM) (p) (P) +-\n'
      //   + '\n'
      //   + 'test.. test... test..... test?..... test!....\n'
      //   + '\n'
      //   + '!!!!!! ???? ,,  -- ---\n'
      //   + '\n'
      //   + '"Smartypants, double quotes" and \'single quotes\'\n'
      //   + '\n'
      //   + '\n'
      //   + '## Emphasis\n'
      //   + '\n'
      //   + '**This is bold text**\n'
      //   + '\n'
      //   + '__This is bold text__\n'
      //   + '\n'
      //   + '*This is italic text*\n'
      //   + '\n'
      //   + '_This is italic text_\n'
      //   + '\n'
      //   + '~~Strikethrough~~\n'
      //   + '\n'
      //   + '\n'
      //   + '## Blockquotes\n'
      //   + '\n'
      //   + '\n'
      //   + '> Blockquotes can also be nested...\n'
      //   + '>> ...by using additional greater-than signs right next to each other...\n'
      //   + '> > > ...or with spaces between arrows.\n'
      //   + '\n'
      //   + '\n'
      //   + '## Lists\n'
      //   + '\n'
      //   + 'Unordered\n'
      //   + '\n'
      //   + '+ Create a list by starting a line with `+`, `-`, or `*`\n'
      //   + '+ Sub-lists are made by indenting 2 spaces:\n'
      //   + '  - Marker character change forces new list start:\n'
      //   + '    * Ac tristique libero volutpat at\n'
      //   + '    + Facilisis in pretium nisl aliquet\n'
      //   + '    - Nulla volutpat aliquam velit\n'
      //   + '+ Very easy!\n'
      //   + '\n'
      //   + 'Ordered\n'
      //   + '\n'
      //   + '1. Lorem ipsum dolor sit amet\n'
      //   + '2. Consectetur adipiscing elit\n'
      //   + '3. Integer molestie lorem at massa\n'
      //   + '\n'
      //   + '\n'
      //   + '1. You can use sequential numbers...\n'
      //   + '1. ...or keep all the numbers as `1.`\n'
      //   + '\n'
      //   + 'Start numbering with offset:\n'
      //   + '\n'
      //   + '57. foo\n'
      //   + '466456\n'
      //   + '1. bar';
      const mdins = new MarkdownIt('commonmark', {
        html: false,
        xhtmlOut: true,
        breaks: true,
        langPrefix: 'boom-',
        quotes: '“”‘’',
        // highlight(str, lang) {
        //   console.log(lang);
        //   if (lang && hljs.getLanguage(lang)) {
        //     try {
        //       return hljs.highlight(lang, str).value;
        //     } catch (e) {
        //       console.log(e);
        //     }
        //   }
        //   return ''; // use external default escaping
        // },

        highlight(str, lang) {
          if (lang && hljs.getLanguage(lang)) {
            try {
              return `<pre class="hljs"><code>${
                hljs.highlight(lang, str, true).value
              }</code></pre>`;
            } catch (__) {}
          }

          console.log(mdins.utils.escapeHtml(str));

          return `<pre class="hljs"><code>${mdins.utils.escapeHtml(str)}</code></pre>`;
        },
      })
        .use(emoji)
        .use(markdownItTocAndAnchor, {
          // eslint-disable-next-line no-unused-vars
          tocCallback(tocMarkdown, tocArray, tocHtml) {
            // console.log(tocHtml);
            // console.log(tocArray)
          },
          anchorLink: false,
          anchorLinkBefore: false,
        });

      const premd = mdins.render(md2);
      // eslint-disable-next-line
        // const premd = markdown.toHTML(, 'Maruku');
      // const premd = markdown.toHTML(md_content, 'Maruku');
      // console.log(premd);
      // console.log(premd.split('\n'));
      // console.log(premd);

      const stylemd = premd.split('\n').map((el) => {
        const newel = el
          .replace('<h1', '<h1 style="color:#99999"')
          // .replace('<h2', '<h2 style="color:blue"')
          .replace('<h2', '<h2 style="color:gold"')
          .replace('<h3', '<h2 style="color:green"')
          .replace('<p', '<p style="font-family:Arial;margin:0"');
        return newel;
      });
      // console.log(stylemd);
      this.premd = stylemd.join('\n');
      // document.querySelector('#mdshow').innerHTML = stylemd.join('\n');
      // document.querySelector('#mdshow').innerHTML = premd;
    },
  },
};
</script>

<style scoped>
  .edit-row {
    /*background-color: #42b983;*/
    height: 100px;
    border: 1px solid red;
  }

  .edit-row:focus {
    /*background-color: red;*/
  }

  [contenteditable]:focus {
    outline: none;
  }

  .btn {
    margin-bottom: 4px;
    margin-top: 4px;
  }

  .prearea {
    background-color: #ffffff;

    /*&.mdfix{*/
    /*  margin: 0;*/
    /*  padding: 0;*/
    /*}*/

    /*&h2 {*/
    /*  margin-block-start: 0;*/
    /*  margin-block-end: 0;*/
    /*}*/
  }
  .prearea >>> h1 {
    color: red;
  }
  .mdfix{
    margin: 0;
    padding: 0;
    color: red;
  }

  .sff{
    color:gold;
  }
</style>

<!--<style>-->
<!--  .prearea >>> .h1 {-->
<!--    color: red;-->
<!--  }-->
<!--</style>-->
