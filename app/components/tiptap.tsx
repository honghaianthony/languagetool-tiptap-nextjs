'use client'

import {useState} from 'react';
import {BubbleMenu, Editor, EditorContent, useEditor} from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import {LanguageTool, LanguageToolHelpingWords} from './extensions/languagetool';
import {content} from './text/text';
import './tiptap.css'

const shouldShow = ({editor}: { editor: Editor }) => {
    const match = editor.storage.languagetool.match;
    const matchRange = editor.storage.languagetool.matchRange;
    const {from, to} = editor.state.selection;
    return !!match && !!matchRange && matchRange.from <= from && to <= matchRange.to;
};

const Tiptap = () => {
    const [loading, setLoading] = useState(false);
    const [match, setMatch] = useState(null);
    const [matchRange, setMatchRange] = useState(null);

    const editor: any = useEditor({
        content,
        extensions: [
            StarterKit,
            LanguageTool.configure({
                automaticMode: true,
                documentId: '1',
                apiUrl: process?.env?.NEXT_PUBLIC_APP_LANGUAGE_TOOL_URL + 'check', // replace with your actual URL
            }),
        ],
        onUpdate({editor}) {
            setTimeout(() => updateMatch(editor));
        },
        onSelectionUpdate({editor}) {
            setTimeout(() => updateMatch(editor));
        },
        onTransaction({transaction: tr}) {
            if (tr.getMeta(LanguageToolHelpingWords.LoadingTransactionName)) setLoading(true);
            else setLoading(false);
        },
    });

    const updateMatch = (editor: any) => {
        setMatch(editor.storage.languagetool.match);
        setMatchRange(editor.storage.languagetool.matchRange);
    };

    const updateHtml = () => {
        navigator.clipboard.writeText(editor.getHTML());
    };

    const acceptSuggestion = (suggestion: any) => {
        editor.commands.insertContentAt(matchRange, suggestion.value);
    };

    const proofread = () => {
        editor.commands.proofread();
    };

    const ignoreSuggestion = () => {
        editor.commands.ignoreLanguageToolSuggestion();
    };

    const replacements = match?.replacements || [];
    const matchMessage = match?.message || 'No Message';

    return (
        <section>
            {editor && <EditorContent className="max-w-1/2 min-w-1/2" editor={editor}/>}

            {editor && (
                <BubbleMenu editor={editor} tippyOptions={{placement: 'bottom', animation: 'fade'}}
                            shouldShow={shouldShow}>
                    <div className="flex flex-col bg-white p-2 rounded shadow-lg max-w-md">
                        <div className="flex flex-col">
                            <span className="text-black">{matchMessage}</span>
                            <button
                                onClick={ignoreSuggestion}
                                className="self-start px-2 py-1 mt-2 bg-red-500 text-white rounded hover:bg-red-600"
                            >
                                Ignore suggestion
                            </button>
                        </div>
                        <div className="flex flex-wrap gap-2 mt-4">
                            {replacements.map((replacement, i) => (
                                <article
                                    key={i + replacement.value}
                                    onClick={() => acceptSuggestion(replacement)}
                                    className="bg-blue-500 text-white rounded px-2 py-1 cursor-pointer font-medium"
                                >
                                    {replacement.value}
                                </article>
                            ))}
                        </div>
                    </div>
                </BubbleMenu>
            )}
        </section>
    );
};

export default Tiptap;
