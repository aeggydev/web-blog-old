<script>
    import ProjectListing from "../lib/components/ProjectListing.svelte"
    import LightImg from "../lib/components/LightImg.svelte"
</script>

<div class="projects">
    <h1>Projects</h1>
    <div class="demos">
        <ProjectListing title="School entrance exam manager"
                        id="exam"
                        bubbles="{[
                            ['Fullstack webapp', '#18AC00'], ['JS & TypeScript', '#CDB70E'], ['React', '#61DAFB'],
                            ['C# & ASP.NET', '#3A008C'], ['GraphQL', '#E632AC'], ['Redux', '#764ABC'], ['JWT', '#D63AFF']
                        ]}">
            <div slot="description">
                Tool that I made for my school. It allows potential participants to sign up for a pre-exam through the
                web interface.

                Organizators can log in and manage the participants through a table. Information in the table can be
                updated and participants are informed of updates by email. Everything happens without reloads.


                <i style="font-weight: 300">Note: The website is in Czech.</i>
            </div>
            <div slot="links">
                <a href="https://github.com/aeggydev/purkynova-prijimacky-frontend" target="_blank"
                   style:background="#00BD0D">
                    Frontend source
                </a>
                <a href="https://github.com/aeggydev/purkynova-prijimacky-backend" target="_blank"
                   style:background="#0061BD" >
                    Backend source
                </a>
            </div>
            <div slot="preview">
                <LightImg src="/project_images/exam_user.png" id="exam_user" parentId="exam" />
                <LightImg src="/project_images/exam_admin.png" id="exam_admin" parentId="exam" />
            </div>
        </ProjectListing>
        <ProjectListing title="OEM Info Tool"
                        id="oem"
                        bubbles="{[
                            ['Platform: Windows', '#18AC00'], ['C#', '#3A008C'],
                            ['WPF', '#C69A00'], ['MVVM', '#C64700']
                        ]}">
            <div slot="description">
                Tool for changing OEM information. Edits the registry information in Windows.

                Allows exporting info into a file and restoring it on another computer. Supports many image formats. Has
                buttons for opening relevant registry panes and viewing changes in system info.

                <i>Written in C#, using the WPF UI framework. I made this project to try making XAML Windows
                    applications.</i>
            </div>
            <div slot="links">
                <a href="https://github.com/aeggydev/oem-info-manager" target="_blank"
                   style:background="#D68D37">
                    Source
                </a>
                <a href="https://github.com/aeggydev/oem-info-manager/releases/download/v1.0.0/oem-logo.zip" target="_blank"
                   style:background="#00B934">
                    Download
                </a>
            </div>
            <div slot="preview">
                <LightImg src="/project_images/oem_tool.png" id="oem_screenshot" parentId="oem" />
            </div>
        </ProjectListing>
        <ProjectListing title="tilde.cz"
                        id="tilde"
                        bubbles="{[
                            ['Static website', '#18AC00'], ['Svelte', '#FF3E00'],
                            ['JS & TS', '#CDB70E'], ['CSS & Sass', '#2449D8']]}">
            <div slot="description">
                My personal website and blog, <b>coincidentally also this website</b>. It’s my first project in Svelte,
                which I find to be amazing framework. I put articles and
                my projects on the website, although I’d like to eventually also put up useful tools and snippets.
                I try to make my site as modern as possible, while keeping it simple, with features like automatic dark
                mode, RSS, CSS Grid and responsive layouts.

                The site is hosted on Cloudflare Pages and generates articles from .md files. I plan on eventually
                switching this over to .org files and making it all a bit more dynamic.
            </div>
            <div slot="links">
                <a href="https://github.com/aeggydev/web-blog" target="_blank"
                   style:background="#D68D37">
                    Source
                </a>
                <a href="/" target="_blank"
                   style:background="#00B934">
                    Visit
                </a>
            </div>
            <div slot="preview">
                <LightImg src="/project_images/tilde.png" id="tilde_about" parentId="tilde" />
            </div>
        </ProjectListing>
        <ProjectListing title="Fitness site"
                        id="fitness"
                        bubbles="{[
                            ['Static website', '#18AC00'], ['JS & TypeScript', '#CDB70E'],
                            ['Tailwind', '#16BECB'], ['React', '#61DBFB'],
                            ['NextJS', '#000000']]}">
            <div slot="description">
                I once worked for a client on a fitness service website, but they sadly gave up on the project halfway
                through. It was one of the first serious projects I ever worked on.

                <i style="font-weight: 300">Note: Images and video blurred for privacy reasons.</i>
            </div>
            <div slot="links">
                <a href="https://github.com/aeggydev/lbs-system" target="_blank"
                   style:background="#D68D37">
                    Source
                </a>
            </div>
            <div slot="preview">
                <LightImg src="/project_images/fitness_site.png" id="fitness_screenshot" parentId="fitness" />
            </div>
        </ProjectListing>
        <ProjectListing title="Countdown app"
                        id="countdown"
                        bubbles="{[
                            ['Platform: Windows', '#18AC00'], ['C#', '#3A008C'],
                            ['WPF', '#C69A00'], ['MVVM', '#C64700']]}">
            <div slot="description">
                Simple app I made to find out, how easy the .NET framework makes it to create such a simple app as a
                countdown app and also to practice MVVM.
            </div>
            <div slot="links">
                <a href="https://github.com/aeggydev/countdown-wpf" target="_blank"
                   style:background="#D68D37">
                    Source
                </a>
                <a href="https://github.com/aeggydev/countdown-wpf/releases/download/v1.0.0/countdown.zip" target="_blank"
                   style:background="#00B934">
                    Download
                </a>
            </div>
            <div slot="preview">
                <LightImg src="/project_images/countdown.png" id="countdown_screenshot" parentId="countdown" />
            </div>
        </ProjectListing>
        <ProjectListing title="My literate Emacs config"
                        bubbles="{[['GNU Emacs', '#C64E3B'], ['emacs-lisp', '#5E5BA8'], ['org-mode', '#78AB9A']]}">
            <div slot="description">
                Emacs is my favorite piece of software. It’s a text editor, but also an operating system. It can be
                infinitely tweaked and changed from within at runtime.
                My goal is to eventually move almost everything I do into it. But I first have to start with my
                development work, which is the hardest.

                The config is written in a declarative way and is written in an .org document, from which the code
                snippets are taken on load-time and ran. I plan to document it more and make it less hierarchical,
                eventually publish it into a website.
            </div>
            <div slot="links">
                <a href="https://github.com/aeggydev/emacs-config" target="_blank"
                   style:background="#D68D37">Source</a>
            </div>
        </ProjectListing>
        <ProjectListing title="Deezer tool"
                        bubbles="{[['Linux CLI', '#EAB310'], ['C# library', '#3A008C']]}">
            <div slot="description">
                Simple CLI tool and C# library that allows you to download music from deezer.com. You just input your
                personal token and then you can download any song, album, artist you like as MP3 with metadata.

                I made this project to practice my reverse-engineering skills and also to learn how to properly use APIs
                of others.
                I can’t guarantee that the project works anymore and I honestly don’t care, as I have no need for it
                anymore.
            </div>
            <div slot="links">
                <a href="https://github.com/aeggydev/deezer-tool" target="_blank"
                   style:background="#D68D37">Source</a>
            </div>
        </ProjectListing>
        <ProjectListing title="MPV player extension"
                        bubbles="{[['Chrome extension', '#18AC00'], ['Go CLI', '#73CDDD']]}">
            <div slot="description">
                Extremely simple Chrome extension with a Go server, which allows you to play a Youtube video in the MPV
                player, which makes playing videos on old laptops much more fluid.

                It’s written to be extendable and support many actions, but I haven’t gotten around to adding those to
                the extension.
            </div>
            <div slot="links">
                <a href="https://github.com/aeggydev/web-mpv" target="_blank"
                   style:background="#D68D37">Source</a>
            </div>
        </ProjectListing>
        <ProjectListing title="Twitter JFIF Renamer"
                        bubbles="{[['Chrome extension', '#18AC00'], ['JS & TypeScript', '#CDB70E']]}">
            <div slot="description">
                Simple Chrome extension that renames all downloaded .JFIF files (format Twitter stores images in) into
                .JPG, so that they can be used properly.
            </div>
            <div slot="links">
                <a href="https://github.com/aeggydev/jfif-renamer-twitter" target="_blank"
                   style:background="#D68D37">Source</a>
                <a href="https://chrome.google.com/webstore/detail/twitter-jfif-renamer/hamcegffnbpeabloimdghellacajgikl"
                   target="_blank"
                   style:background="#00B934">Download</a>
            </div>
        </ProjectListing>
    </div>
</div>

<style lang="scss">
  .projects > h1 {
    text-align: center;
  }

  .demos {
    display: grid;
    place-items: stretch;

    grid-template-columns: 1fr;
    grid-gap: 0.5rem;
    @media (min-width: 768px) {
      grid-template-columns: 1fr 1fr;
    }

    .bubble {
      padding: 0.3rem 0.7rem;
      border-radius: 0.8rem;
      color: white;
    }

    .info {
      line-height: 2;
    }
  }
</style>
