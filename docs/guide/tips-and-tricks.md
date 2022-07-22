---
sidebar_position: 2
---

# Tips and Tricks

:::caution

These docs are very technical, and may require Linux experience to understand.
You can help us bring these docs to more users by [contributing](/docs/contributing).

:::

## Working with Distrobox

### Running applications on the host

This can be necessary if you want to interact with tools available from the host, for example `podman`, `nmcli` or `lpm` without leaving the Distrobox container in between. You can use flatpak-spawn, included in the base installation for this:

```bash
$ flatpak-spawn --host MYAPP --help
```

Replace *MYAPP* with the name of the app you wish to run.

If the application you want to call requires sudo access, the -S option must be supplied to sudo like below:

```bash
$ flatpak-spawn --host sudo -S <MYAPP> status
```

## Working with OSTree

### Tracking changes to tauOS

Some directories in tauOS are writable by the user, like `/etc`. You can get a quick overview of the files changed under `/etc` using the following command:

```bash
$ sudo ostree admin config-diff
```

To get a more elaborate diff of `/etc`, you can use something like this:

```bash
$ sudo diff -yrW200 --suppress-common-lines --color=always /usr/etc /etc 2>/dev/null
```

:::info


This works because tauOS keeps an unmodified copy of the `/etc` directory under `/usr/etc`. All of your changes go to `/etc` directly.

:::


## Working with Flatpak

### Using Flatpak applications from the terminal

The most noticable change when using Flatpak applications instead of conventional installations is that the applications cannot be directly called from the CLI any more, like so:

```bash
$ hello
bash: command not found: hello
```

Instead, one can call them like this:

```bash
$ flatpak run co.tauos.Hello
```

In addition, most Flatpak applications export their internal binaries under an installation-dependent location:

- For Flatpak applications installed from `system` remotes, these can be found under `/var/lib/flatpak/exports/bin/`

- For Flatpak applications installed from `user` remotes, these can be found under `$HOME/.local/share/flatpak/exports/bin/`

:::info

If you’re unsure to which installation a Flatpak application belongs, you can use this command to print it out:

```bash
$ flatpak list --app --columns=name,installation
```

:::

You can then either add these directories to your `$PATH`:

```bash
$ co.tauos.Hello
```

If you find yourself using a certain application a lot, you can setup a shell alias:

```bash
$ alias hello="flatpak run co.tauos.Hello"
  # or alias hello="co.tauos.Hello"
$ hello
```