<!-- section-title: 😵 Closing -->

# People?
### Active project, modules for many things, supports sustainable development

# Platform?
### Bundled with Windows, runs on Linux and Mac

# Paradigms?
### Prefers pipelines, lambda functions supported, cmdlets deal with objects

```PowerShell
$IsEven = { Param($X) ($X % 2) -eq 0 }
$TimesTen = { Param($X) $X * 10 }
1..10 | ? { & $IsEven $_ } | % { & $TimesTen $_ }
```

---

# PowerShell Tips

### ⚡ Supercharge autocomplete with enhanced history support
```PowerShell
# Add these lines to your $PROFILE configuration
Import-Module PSReadLine
Set-PSReadlineKeyHandler -Key Tab -Function MenuComplete
Set-PSReadlineKeyHandler -Key UpArrow -Function HistorySearchBackward
Set-PSReadlineKeyHandler -Key DownArrow -Function HistorySearchForward
```

### 😻 Use a "code" font with [`#ligatures`](https://twitter.com/jhwohlgemuth/status/1373008650474754049)
![Cascadia Code ligatures](../assets/ligatures.gif)

---

# 🧐 Check out my setup on GitHub
### [github.com/jhwohlgemuth/my-shell-setup](https://github.com/jhwohlgemuth/my-shell-setup)

```shell
git clone https://github.com/jhwohlgemuth/my-shell-setup
```

💡 Use [stow](https://www.gnu.org/software/stow/) to get up and running quickly. See [README](https://github.com/jhwohlgemuth/my-shell-setup/blob/main/README.md) for details.

---

![It's Web Surfin' Time!](../assets/surfin.gif)

## Links and Resources

- This presentation was created using [Fusuma](https://hiroppy.github.io/fusuma/)
- [Prelude GitHub Repo](https://github.com/jhwohlgemuth/pwsh-prelude)
- [Microsoft PowerShell Documentation](https://docs.microsoft.com/en-us/powershell/)
- [PowerShell GitHub Repo](https://github.com/powershell/powershell)
- [PSScriptAnalyzer GitHub Repo](https://github.com/PowerShell/PSScriptAnalyzer)
- [Pester Homepage](https://pester.dev/)
- [PowerShell, Remoting, and Security](https://github.com/devops-collective-inc/secrets-of-powershell-remoting/blob/master/manuscript/powershell-remoting-and-security.md)
- [A Comparison of Shell and Scripting Language Securityaq ](https://devblogs.microsoft.com/powershell/a-comparison-of-shell-and-scripting-language-security/)
- [PowerShell ❤ the Blue Team](https://devblogs.microsoft.com/powershell/powershell-the-blue-team/)
- [PowerShell Security at Enterprise Customers](https://docs.microsoft.com/en-us/archive/blogs/daviddasneves/powershell-security-at-enterprise-customers)
- [talking to your security team about powershell and dbatools](https://dbatools.io/secure/)

---

# Fin
