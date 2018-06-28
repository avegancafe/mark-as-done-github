'use strict'

setTimeout(() => {
  const comments = $('.has-inline-notes')

  for (let comment of comments) {
    comment = $(comment)
    if (comment.find('.outdated-comment-label').length == 0) {
      comment.addClass(
        'file js-comment-container outdated-comment js-details-container Details has-inline-notes js-transitionable open Details--on'
      )
      const header = comment.find('.file-header')
      const button = $(
        '<button aria-label="Temporarily hide this comment"></button>'
      )
        .addClass(
          'btn-link text-gray float-right f6 outdated-comment-label hide-outdated-button js-details-target tooltipped tooltipped-w'
        )
        .html(
          '<svg class="octicon octicon-unfold position-relative mr-1" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M11.5 7.5L14 10c0 .55-.45 1-1 1H9v-1h3.5l-2-2h-7l-2 2H5v1H1c-.55 0-1-.45-1-1l2.5-2.5L0 5c0-.55.45-1 1-1h4v1H1.5l2 2h7l2-2H9V4h4c.55 0 1 .45 1 1l-2.5 2.5zM6 6h2V3h2L7 0 4 3h2v3zm2 3H6v3H4l3 3 3-3H8V9z"></path></svg>Hide comment'
        )

      header.prepend(button)
    }
  }
})
