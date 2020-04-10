## Add Event Lister

This is the base repo for an addEventLister website.

---

To add an event, just create a pull request against the `events` branch, by creating a markdown file with your event information in it.

The following format should be used: frontmatter, followed by content -

```
---
title: Required - string
start_date: Required - string in format "YYYY-MM-DD", e.g. "2020-02-28"
end_date: Optional - string in format "YYYY-MM-DD", e.g. "2020-02-28"
country: Optional - string
city: Optional - string
online: Boolean - true, false, or empty (which will equal false)
website_name: Optional - string
website_address: Optional - url
---
This is a conference about Maecenas sed diam eget risus varius blandit sit amet non magna. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Curabitur blandit tempus porttitor.

```

The list of pull requests will be reviewed daily and deployed.

Any questions, email mark@annertech.com